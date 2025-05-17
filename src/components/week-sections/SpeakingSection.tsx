import React from 'react';
import { MessageSquare } from 'lucide-react';

const speakingContent = {
  1: {
    tasks: [
      {
        title: "Monologue: Teachers and Education",
        duration: "3 minutes",
        topics: [
          "Which teacher has made the biggest impact on you?",
          "Are school uniforms used not to divide children by their social status?",
          "How has education changed in recent years?",
        ],
        preparation: [
          "Make notes of key points (not full sentences)",
          "Structure your talk with an introduction, main points, and conclusion",
          "Include personal experiences and examples",
        ],
      },
      {
        title: "Read Aloud Practice",
        focus: "Pronunciation and intonation",
        materials: [
          "Reading comprehension texts",
          "Dialogue scripts",
          "News articles at B1 level",
        ],
      },
    ],
  },
  2: {
    tasks: [
      {
        title: "Travel Experiences",
        duration: "4 minutes",
        type: "Dialogue",
      },
      {
        title: "Historical Events",
        duration: "3 minutes",
        type: "Presentation",
      },
    ],
  },
  3: {
    tasks: [
      {
        title: "Urban Problems Discussion",
        duration: "5 minutes",
        type: "Interactive Task",
      },
    ],
  },
  4: {
    tasks: [
      {
        title: "Full Speaking Test Practice",
        type: "Exam Simulation",
        duration: "15 minutes",
      },
    ],
  },
};

interface SpeakingSectionProps {
  weekId: number;
}

const SpeakingSection: React.FC<SpeakingSectionProps> = ({ weekId }) => {
  const content = speakingContent[weekId as keyof typeof speakingContent];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center mb-6">
        <MessageSquare className="h-6 w-6 text-blue-600 mr-2" />
        <h2 className="text-xl font-semibold text-gray-900">Speaking Practice</h2>
      </div>

      <div className="space-y-6">
        {content.tasks.map((task, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-medium text-gray-800 mb-2">{task.title}</h3>
            <div className="space-y-2">
              {task.duration && (
                <div className="text-sm text-gray-600">Duration: {task.duration}</div>
              )}
              {task.type && (
                <div className="text-sm text-gray-600">Type: {task.type}</div>
              )}
              {task.topics && (
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-1">Discussion Topics:</h4>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                    {task.topics.map((topic, i) => (
                      <li key={i}>{topic}</li>
                    ))}
                  </ul>
                </div>
              )}
              {task.preparation && (
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-1">Preparation Tips:</h4>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                    {task.preparation.map((tip, i) => (
                      <li key={i}>{tip}</li>
                    ))}
                  </ul>
                </div>
              )}
              {task.materials && (
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-1">Practice Materials:</h4>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                    {task.materials.map((material, i) => (
                      <li key={i}>{material}</li>
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

export default SpeakingSection;