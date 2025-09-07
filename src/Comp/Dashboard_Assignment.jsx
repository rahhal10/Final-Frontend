import React from 'react'

function Dashboard_Assignment({ assignments }) {
  return (
    <>



           <ul className="assign-list">
              <li className="assign-row">
                <div className="task">
                  <div className="t-title">{assignments.title}</div>
                  <div className="t-sub">{assignments.subject}</div>
                </div>
                <div className="task-right">
                  <span className={`status-pill`}>{assignments.priority}</span>
                  <span className="due">{assignments.dueDate}</span>
                </div>
              </li>
        </ul>

          </>
  )
}

export default Dashboard_Assignment