# HTU ST Course Frontend Application
LearnHub is a modern, scalable, and user-friendly React-based web application designed to manage and showcase courses .The application provides an intuitive experience for both students and administrators, focusing on course discovery, management, and user engagement.

---

## 🚀 Features

### 🔑 Role-Based Authentication

* Secure route protection for students and admins.
* Simple login, registration, and profile management.

### 🎨 Modular UI Components

* Reusable navigation bars, footers, course cards, dashboards, and more.
* Consistent design with modular CSS for easy maintenance.

### 📊 Comprehensive Admin Dashboards

* Admins can manage courses, users, and assignments.
* Real-time updates and management features.

### ⚡ Performance and Stability

* Optimized for responsive design and fast page loads.
* Clean codebase for easy collaboration and scalability.

---

## 📋 User Requirements

### Students

Students can:

* Register and log in securely.
* Browse, search, and enroll in courses.
* View and manage their enrolled courses and assignments.
* Receive updates about courses and assignments.

### Administrators

Administrators can:

* View and manage all courses and users.
* Add, edit, or delete courses and user accounts.
* Manage assignments and course content.
* Access dashboards with analytics and system updates.

---

## 🛠 Technologies

* **Frontend Framework:** React
* **Routing & Authentication:** React Router
* **Styling:** Modular CSS
* **Version Control:** Git & GitHub

---

## 📂 Project Structure

The project is organized for easy collaboration and maintainability:

```
Final-Frontend/
├── public/
├── src/
│   ├── assets/
│   ├── Comp/
│   ├── Css/
│   ├── Routes/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
├── README.md
└── ...
```

---

## 🚀 Getting Started

### Prerequisites

* Node.js and npm
* Git

### Installation

1. **Clone the repository:**
	```bash
	git clone <your-repo-url>
	```

2. **Navigate to the project:**
	```bash
	cd Final-Frontend
	```

3. **Install dependencies:**
	```bash
	npm install
	```

### Running the App

* Start the application:
  ```bash
  npm run dev
  ```

* Access via your browser: http://localhost:5173



---

## 🤖 AI Chatbot Features

The frontend includes an AI-powered chatbot assistant with advanced capabilities for course discovery, recommendations, and learning path planning.

### AI Chatbot Component

**Location:** `src/Routes/Ai_Chatbot.jsx`

**Dependencies:**
- `react-markdown` - Renders markdown content
- `remark-gfm` - GitHub Flavored Markdown support (tables, strikethrough, etc.)

### Core Features

| Feature | Description | Implementation |
|---------|-------------|----------------|
| **Multi-turn Conversations** | Full conversation history with context | Context array sent to backend with each request |
| **Markdown Rendering** | Tables, bullet points, formatted text | ReactMarkdown component with remarkGfm plugin |
| **Prompt Mode Toggle** | Switch between Naive and Improved prompts | `promptType` state variable ("naive" or "improved") |
| **Stop Generation** | Cancel response generation mid-stream | `handleStopGeneration()` clears interval |
| **Agent Actions** | AI can add courses to cart automatically | `executeActions()` processes backend actions |
| **Chat Persistence** | Conversations saved across sessions | localStorage with key "chatHistory" |
| **Typing Animation** | Character-by-character text streaming | setInterval with 20ms delay per character |

### State Management

```javascript
const [input, setInput] = useState("");                    // User input text
const [promptType, setPromptType] = useState("improved");  // "naive" or "improved"
const [isGenerating, setIsGenerating] = useState(false);   // Generation in progress
const [currentInterval, setCurrentInterval] = useState(null); // Interval ID for stopping
const [messages, setMessages] = useState([...]);           // Chat history array
```

### Prompt Mode Toggle

Located in the sidebar, allows switching between two prompt engineering modes:

| Mode | Description | Use Case |
|------|-------------|----------|
| **Naive** | Minimal 2-line prompt, basic responses, plain text | Demonstration of basic prompting |
| **Improved** | Full prompt with 8+ patterns, rich formatted responses | Production use, best user experience |

**How it works:**
1. User clicks "Naive" or "Improved" button in sidebar
2. `promptType` state updates
3. Next API call includes `prompt_type` in request body
4. Backend selects corresponding system prompt

### Stop Generation Button

**Behavior:**
- Appears as red "Stop" button when `isGenerating` is true
- Replaces the "Send" button during generation
- Clicking calls `handleStopGeneration()`:
  - Clears the typing interval
  - Sets `isGenerating` to false
  - Appends "[Generation stopped]" to current message

**Prevents Double-Sending:**
- Textarea disabled during generation (`disabled={isGenerating}`)
- Placeholder changes to "Generating response..."
- Clear Chat button disabled during generation
- `handleSend()` returns early if `isGenerating` is true

### Agent Capabilities (4 Actions)

The AI can perform intelligent actions on behalf of the user:

| Action | Trigger Phrase Examples | What Happens |
|--------|------------------------|--------------|
| **Add to Cart** | "Add Python for Beginners to my cart", "I want to buy [course]" | Course added to user's cart via API |
| **Recommendations** | "What courses should I take?", "Recommend something" | Personalized suggestions based on enrolled courses |
| **Learning Paths** | "Create a learning path for data science" | Multi-phase roadmap with courses in markdown tables |
| **Comparisons** | "Compare DevOps and Cloud Computing" | Side-by-side comparison table |

**Action Execution Flow:**
1. Backend parses AI response for action markers
2. Actions returned in API response as `data.actions` array
3. Frontend `executeActions()` processes each action
4. For ADD_TO_CART: fetches course details, calls `/api/users/addCart`
5. Success/error message appended to chat

### Quick Action Buttons

Pre-filled prompts in sidebar for common queries:
- "What beginner courses do you recommend?"
- "I want to focus on programming. What courses should I take?"
- "Show me courses related to AI and Data."

### API Integration

**Endpoint:** `POST http://localhost:5000/api/users/ai-chat`

**Request Body:**
```json
{
  "message": "User's question",
  "email": "user@example.com",
  "username": "user1",
  "context": [
    {"role": "user", "text": "Previous message"},
    {"role": "assistant", "text": "Previous response"}
  ],
  "prompt_type": "improved"
}
```

**Response:**
```json
{
  "reply": "AI response with markdown formatting",
  "actions": [
    {"type": "ADD_TO_CART", "course_title": "Python for Beginners"}
  ]
}
```

### Styling

**CSS File:** `src/Css/Ai_Chatbot.css`

| Style Class | Purpose |
|-------------|---------|
| `.lh-ai-layout` | Main layout container (sidebar + chat) |
| `.lh-ai-sidebar` | Left sidebar with actions and settings |
| `.lh-ai-main` | Main chat area |
| `.lh-ai-message` | Individual message bubble |
| `.lh-ai-message table` | Markdown table styling |
| `.lh-ai-prompt-toggle` | Prompt mode toggle container |
| `.lh-ai-toggle-buttons` | Naive/Improved button group |
| `.lh-ai-toggle-buttons button.active` | Active toggle button (purple) |
| `.lh-ai-input .stop-button` | Red stop button |
| `.lh-ai-input textarea:disabled` | Disabled textarea styling |

### Chat Persistence

- Messages saved to `localStorage` with key `"chatHistory"`
- Automatically loaded on component mount
- Updated via `useEffect` whenever `messages` state changes
- "Clear Chat" button removes from localStorage and resets state

---

## 🗺️ Roadmap

* [x] User authentication and registration
* [x] Role-based access control
* [x] Admin Dashboard
* [x] Modular React components
* [x] AI Chatbot with agent capabilities
* [x] Prompt engineering patterns
* [x] Stop generation feature
* [ ] Real-time notifications
* [ ] Advanced analytics and reporting

---

## 💡 Contribution

Contributions are welcome! Steps to contribute:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/YourFeature`.
3. Commit changes: `git commit -m 'Add YourFeature'`.
4. Push branch: `git push origin feature/YourFeature`.
5. Open a Pull Request describing your changes.

---

## 📜 License

Distributed under the MIT License. See the LICENSE file for details.

---

## 🙌 Acknowledgements

Special thanks to:

* React and React Router community

---

⭐ *Thank you for exploring LearnHub Course Frontend Application!*
