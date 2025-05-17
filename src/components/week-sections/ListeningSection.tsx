import React from 'react';
import { Headphones } from 'lucide-react';

const listeningContent = {
  1: {
    topics: [
      {
        title: "Famous Scientists and Discoveries",
        type: "Lecture",
        focus: "Understanding main ideas and specific details",
        tasks: [
          "Listen for key achievements and dates",
          "Complete note-taking exercise",
          "Answer multiple choice questions",
        ],
      },
      {
        title: "The Giant Magellan Telescope",
        type: "Documentary Excerpt",
        focus: "Technical descriptions and specifications",
        tasks: [
          "Match descriptions to parts of the telescope",
          "Complete missing information",
          "Order the construction steps",
        ],
      },
      {
        title: "Wedding and Vacation Plans",
        type: "Conversation",
        focus: "Understanding future arrangements",
        tasks: [
          "Identify specific details about plans",
          "Complete a schedule with correct information",
          "Answer true/false questions",
        ],
      },
    ],
  },
  2: {
    topics: [
      {
        title: "The Great Fire of London",
        type: "Historical Account",
        focus: "Understanding chronological events",
      },
      {
        title: "Beethoven's Life",
        type: "Biography",
        focus: "Understanding biographical information",
      },
    ],
  },
  3: {
    topics: [
      {
        title: "Urban Life and City Problems",
        type: "Interviews",
        focus: "Understanding opinions and suggestions",
      },
    ],
  },
  4: {
    topics: [
      {
        title: "Exam Practice",
        type: "Mixed Formats",
        focus: "Full exam simulation",
      },
    ],
  },
};

interface ListeningSectionProps {
  weekId: number;
}

const ListeningSection: React.FC<ListeningSectionProps> = ({ weekId }) => {
  const content = listeningContent[weekId as keyof typeof listeningContent];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center mb-6">
        <Headphones className="h-6 w-6 text-blue-600 mr-2" />
        <h2 className="text-xl font-semibold text-gray-900">Listening Practice</h2>
      </div>

      <div className="space-y-6">
        {content.topics.map((topic, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-medium text-gray-800 mb-2">{topic.title}</h3>
            <div className="space-y-2">
              <div className="text-sm text-gray-600">Type: {topic.type}</div>
              <div className="text-sm text-gray-600">Focus: {topic.focus}</div>
              {topic.tasks && (
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mt-2 mb-1">Practice Tasks:</h4>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                    {topic.tasks.map((task, i) => (
                      <li key={i}>{task}</li>
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

export default ListeningSection;