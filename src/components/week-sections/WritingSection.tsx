import React from 'react';
import { Pen } from 'lucide-react';

const writingContent = {
  1: {
    tasks: [
      {
        title: "Daily Routine Description",
        type: "Short Paragraph",
        wordCount: "50-80 words",
        description: "Write about your daily habits and routines",
        guidelines: [
          "Use Present Simple for regular activities",
          "Include time expressions",
          "Describe at least 5 different activities",
        ],
      },
      {
        title: "Email to an Old Friend",
        type: "Informal Email",
        wordCount: "100-120 words",
        description: "Write to a friend from primary school you haven't seen in years",
        guidelines: [
          "Use Past Simple for shared memories",
          "Use Present Simple/Continuous for current situation",
          "Include future plans",
          "Maintain an informal tone",
        ],
      },
    ],
  },
  2: {
    tasks: [
      {
        title: "Describing Your City",
        type: "Descriptive Writing",
        wordCount: "120-150 words",
        description: "Write about your favorite town or city",
      },
      {
        title: "Travel Anecdote",
        type: "Narrative Writing",
        wordCount: "120-150 words",
        description: "Share a memorable or funny travel experience",
      },
    ],
  },
  3: {
    tasks: [
      {
        title: "Living Abroad Essay",
        type: "Argumentative Essay",
        wordCount: "150-180 words",
        description: "Discuss advantages and disadvantages of studying abroad",
      },
    ],
  },
  4: {
    tasks: [
      {
        title: "Exam Practice",
        type: "Mixed Writing Tasks",
        description: "Complete full practice writing tasks under timed conditions",
      },
    ],
  },
};

interface WritingSectionProps {
  weekId: number;
}

const WritingSection: React.FC<WritingSectionProps> = ({ weekId }) => {
  const content = writingContent[weekId as keyof typeof writingContent];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center mb-6">
        <Pen className="h-6 w-6 text-blue-600 mr-2" />
        <h2 className="text-xl font-semibold text-gray-900">Writing Practice</h2>
      </div>

      <div className="space-y-6">
        {content.tasks.map((task, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-medium text-gray-800 mb-2">{task.title}</h3>
            <div className="space-y-2">
              <div className="text-sm text-gray-600">Type: {task.type}</div>
              {task.wordCount && (
                <div className="text-sm text-gray-600">Word count: {task.wordCount}</div>
              )}
              <p className="text-gray-700">{task.description}</p>
              {task.guidelines && (
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mt-2 mb-1">Writing Guidelines:</h4>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                    {task.guidelines.map((guideline, i) => (
                      <li key={i}>{guideline}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WritingSection;