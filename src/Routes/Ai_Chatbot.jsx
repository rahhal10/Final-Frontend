import React, { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import '../Css/Ai_Chatbot.css';

const Ai_Chatbot = () => {
  const [input, setInput] = useState("");
  const [promptType, setPromptType] = useState("improved"); // "naive" or "improved"
  const [isGenerating, setIsGenerating] = useState(false); // Track if response is being generated
  const [currentInterval, setCurrentInterval] = useState(null); // Store interval ID for stopping
  const [messages, setMessages] = useState(
    JSON.parse(localStorage.getItem("chatHistory")) || [
      {
        role: "assistant",
        text: "Welcome to LearnHub AI. I can help you explore courses, compare options, and plan your learning path.",
      },
    ]
  );

  const fillInput = (text) => setInput(text);

  const executeActions = async (actions) => {
    if (!actions || actions.length === 0) return;

    const user = JSON.parse(localStorage.getItem("user")) || {};
    const email = user.email || "";
    const username = user.username || "";

    if (!email || !username) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "Please log in to add courses to your cart." }
      ]);
      return;
    }

    for (const action of actions) {
      if (action.type === "ADD_TO_CART") {
        try {
          const coursesResponse = await fetch("http://localhost:5000/api/users/courses");
          const allCourses = await coursesResponse.json();
          
          const course = allCourses.find(c => c.title === action.course_title);
          
          if (course) {
            const response = await fetch('http://localhost:5000/api/users/addCart', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                username: username,
                email: email,
                title: course.title,
                instructor: course.instructor,
                price: course.price,
                category: course.category,
                duration: course.duration,
                lessons_count: course.lessons_count,
                rating: course.rating,
                image_url: course.image_url,
                description: course.description || '',
                quantity: 1
              }),
            });

            if (response.ok) {
              console.log(`Successfully added ${course.title} to cart`);
              setMessages((prev) => [
                ...prev,
                { role: "assistant", text: `✓ Successfully added "${course.title}" to your cart!` }
              ]);
            } else {
              const errorData = await response.json();
              console.error(`Failed to add ${course.title} to cart:`, errorData);
              setMessages((prev) => [
                ...prev,
                { role: "assistant", text: `Failed to add "${course.title}" to cart. ${errorData.error || 'Please try again.'}` }
              ]);
            }
          } else {
            console.error(`Course not found: ${action.course_title}`);
            setMessages((prev) => [
              ...prev,
              { role: "assistant", text: `Sorry, I couldn't find a course titled "${action.course_title}" in the catalog.` }
            ]);
          }
        } catch (error) {
          console.error('Error executing ADD_TO_CART action:', error);
          setMessages((prev) => [
            ...prev,
            { role: "assistant", text: `Failed to add course to cart due to a network error. Please check your connection and try again.` }
          ]);
        }
      }
      else if (action.type === "RECOMMEND_COURSES" && action.result) {
        try {
          const recommendations = action.result;
          if (recommendations.length > 0) {
            let recommendationText = "🎯 **Personalized Course Recommendations:**\n\n";
            recommendations.forEach((rec, index) => {
              recommendationText += `**${index + 1}. ${rec.course.title}**\n`;
              recommendationText += `   📚 ${rec.course.category} • ${rec.course.duration} • ⭐ ${rec.course.rating}/5.0\n`;
              recommendationText += `   💰 $${rec.course.price}\n`;
              if (rec.reasons.length > 0) {
                recommendationText += `   ✨ *${rec.reasons.join(', ')}*\n`;
              }
              recommendationText += "\n";
            });
            
            setMessages((prev) => [
              ...prev,
              { role: "assistant", text: recommendationText }
            ]);
          } else {
            setMessages((prev) => [
              ...prev,
              { role: "assistant", text: "I couldn't find any personalized recommendations based on your current courses. Try browsing our course catalog!" }
            ]);
          }
        } catch (error) {
          console.error('Error displaying recommendations:', error);
          setMessages((prev) => [
            ...prev,
            { role: "assistant", text: "Failed to display recommendations. Please try again." }
          ]);
        }
      }
      else if (action.type === "CREATE_LEARNING_PATH" && action.result) {
        try {
          const learningPath = action.result;
          let pathText = `🗺️ **Learning Path: ${learningPath.path_name}**\n\n`;
          pathText += `🎯 **Goal:** ${learningPath.career_goal}\n\n`;
          
          learningPath.steps.forEach((step) => {
            pathText += `### Step ${step.step}: ${step.level}\n`;
            pathText += `${step.description}\n\n`;
            
            if (step.courses.length > 0) {
              step.courses.forEach((course, index) => {
                pathText += `${index + 1}. **${course.title}**\n`;
                pathText += `   📚 ${course.category} • ${course.duration} • ⭐ ${course.rating}/5.0\n`;
                pathText += `   💰 $${course.price}\n\n`;
              });
            }
          });
          
          setMessages((prev) => [
            ...prev,
            { role: "assistant", text: pathText }
          ]);
        } catch (error) {
          console.error('Error displaying learning path:', error);
          setMessages((prev) => [
            ...prev,
            { role: "assistant", text: "Failed to generate learning path. Please try again." }
          ]);
        }
      }
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isGenerating) return;

    const userText = input;
    setMessages((prev) => [
      ...prev,
      { role: "user", text: userText },
      { role: "assistant", text: "Thinking..." },
    ]);
    setInput("");
    setIsGenerating(true);
    localStorage.setItem("chatHistory", JSON.stringify(messages));

    try {
      const user = JSON.parse(localStorage.getItem("user")) || {};
      const email = user.email || "";
      const username = user.username || "";

      const context = messages.map(msg => ({ role: msg.role, text: msg.text }));

      const response = await fetch("http://localhost:5000/api/users/ai-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userText,
          email,
          username,
          context,
          prompt_type: promptType,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Request failed");
      }

      let newMessage = "";
      const assistantMessage = data.reply;
      const interval = setInterval(() => {
        if (newMessage.length < assistantMessage.length) {
          newMessage += assistantMessage.charAt(newMessage.length);
          setMessages((prev) => {
            const updated = [...prev];
            updated[updated.length - 1] = { role: "assistant", text: newMessage };
            return updated;
          });
        } else {
          clearInterval(interval);
          setCurrentInterval(null);
          setIsGenerating(false);
          
          if (data.actions && data.actions.length > 0) {
            executeActions(data.actions);
          }
        }
      }, 20);
      
      setCurrentInterval(interval);

    } catch (err) {
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          text: "Sorry, something went wrong. Try again.",
        };
        return updated;
      });
      setIsGenerating(false);
    }
  };

  const handleStopGeneration = () => {
    if (currentInterval) {
      clearInterval(currentInterval);
      setCurrentInterval(null);
      setIsGenerating(false);
      setMessages((prev) => {
        const updated = [...prev];
        if (updated.length > 0 && updated[updated.length - 1].role === "assistant") {
          updated[updated.length - 1].text += " [Generation stopped]";
        }
        return updated;
      });
    }
  };

  const handleClearChat = () => {
    setMessages([]);
    localStorage.removeItem("chatHistory");
  };

  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(messages));
  }, [messages]);

  return (
    <div className="lh-ai-layout">
      <aside className="lh-ai-sidebar">
        <h2>AI Assistant</h2>
        <p>
          Your personal guide for navigating LearnHub courses and building a
          learning roadmap.
        </p>

        <div className="lh-ai-actions">
          <button
            onClick={() =>
              fillInput("What beginner courses do you recommend?")
            }
          >
            Beginner courses
          </button>

          <button
            onClick={() =>
              fillInput("I want to focus on programming. What courses should I take?")
            }
          >
            Programming focus
          </button>

          <button
            onClick={() =>
              fillInput("Show me courses related to AI and Data.")
            }
          >
            AI & Data
          </button>
        </div>

        <div className="lh-ai-prompt-toggle">
          <label>Prompt Mode:</label>
          <div className="lh-ai-toggle-buttons">
            <button
              className={promptType === "naive" ? "active" : ""}
              onClick={() => setPromptType("naive")}
            >
              Naive
            </button>
            <button
              className={promptType === "improved" ? "active" : ""}
              onClick={() => setPromptType("improved")}
            >
              Improved
            </button>
          </div>
        </div>

        <div className="lh-ai-note">
          Tip: Ask natural questions like you would ask a human advisor.
        </div>
      </aside>

      <main className="lh-ai-main">
        <div className="lh-ai-chat">
          {messages.map((msg, index) => (
            <div key={index} className={`lh-ai-row ${msg.role}`}>
              <div
                className={`lh-ai-message ${msg.text === "Thinking..." ? "typing" : ""}`}
              >
                {msg.isHTML ? (
                  <div dangerouslySetInnerHTML={{ __html: msg.text }} />
                ) : msg.role === "assistant" ? (
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.text}</ReactMarkdown>
                ) : (
                  msg.text
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="lh-ai-input">
          <textarea
            placeholder={isGenerating ? 'Generating response...' : 'Ask something about LearnHub courses...'}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={1}
            disabled={isGenerating}
          />
          {isGenerating ? (
            <button onClick={handleStopGeneration} className="stop-button">
              Stop
            </button>
          ) : (
            <button onClick={handleSend} disabled={!input.trim()}>
              Send
            </button>
          )}
          <button onClick={handleClearChat} className="clear-button" disabled={isGenerating}>
            Clear Chat
          </button>
        </div>
      </main>
    </div>
  );
};

export default Ai_Chatbot;
