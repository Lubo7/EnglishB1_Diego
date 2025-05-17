import React from 'react';
import { Book } from 'lucide-react';

const readingContent = {
  1: {
    texts: [
      {
        title: "Beat Exam Stress",
        type: "Title Matching",
        description: "Practice identifying main ideas and matching titles to paragraphs. Learn strategies for managing exam stress and improving study habits.",
        tasks: [
          "Read the text and match the titles to the correct paragraphs",
          "Identify key vocabulary related to studying and stress management",
          "Answer comprehension questions about study techniques",
        ],
      },
      {
        title: "How To Live Without Social Media",
        type: "Multiple Choice",
        description: "Explore the impact of social media on daily life and strategies for digital detox.",
        tasks: [
          "Read the article and answer multiple choice questions",
          "Identify the author's main arguments",
          "Practice finding supporting details",
        ],
      },
      {
        title: "How To Get Jobs Done",
        type: "True/False",
        description: "Learn about the 1-3-5 Rule for task management and productivity.",
        tasks: [
          "Read about task prioritization methods",
          "Determine if statements are true or false",
          "Practice scanning for specific information",
        ],
      },
    ],
  },
  2: {
    texts: [
      {
        title: "Chelsea FC Tours",
        type: "Information Location",
        description: "Practice finding specific details about different tour options.",
      },
      {
        title: "8 Ways To Save Money On A Campervan Holiday",
        type: "Paragraph Matching",
        description: "Learn about budget travel tips and camping strategies.",
      },
    ],
  },
  3: {
    texts: [
      {
        title: "Living Abroad",
        type: "Opinion Analysis",
        description: "Read about experiences of students studying in different countries.",
      },
    ],
  },
  4: {
    texts: [
      {
        title: "Exam Practice",
        type: "Mixed Format",
        description: "Complete full practice tests with various question types.",
      },
    ],
  },
};

interface ReadingSectionProps {
  weekId: number;
}

const ReadingSection: React.FC<ReadingSectionProps> = ({ weekId }) => {
  const content = readingContent[weekId as keyof typeof readingContent];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center mb-6">
        <Book className="h-6 w-6 text-blue-600 mr-2" />
        <h2 className="text-xl font-semibold text-gray-900">Reading Comprehension</h2>
      </div>

      <div className="space-y-6">
        {content.texts.map((text, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-medium text-gray-800 mb-2">{text.title}</h3>
            <div className="text-sm text-gray-600 mb-2">Type: {text.type}</div>
            <p className="text-gray-700 mb-3">{text.description}</p>
            {text.tasks && (
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Practice Tasks:</h4>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                  {text.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadingSection;