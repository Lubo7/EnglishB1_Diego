import React from 'react';
import { BookOpen } from 'lucide-react';

const grammarContent = {
  1: {
    title: "Present Simple, Present Continuous, and Past Simple",
    topics: [
      {
        name: "Present Simple & Present Continuous",
        examples: [
          "I usually wake up at 7 AM (habit)",
          "I am studying English right now (current action)",
        ],
        exercises: [
          "Complete the sentences with the correct form",
          "Choose between Present Simple and Present Continuous",
        ],
      },
      {
        name: "Past Simple",
        examples: [
          "I went to school yesterday",
          "She studied English last year",
        ],
        exercises: [
          "Regular vs Irregular verbs practice",
          "Creating simple past tense sentences",
        ],
      },
      {
        name: "Basic Connectors",
        examples: [
          "I like coffee and tea",
          "I want to go but I'm tired",
          "I'm tired so I'm going to bed",
          "I'm studying because I have an exam",
        ],
        exercises: [
          "Connecting sentences with appropriate connectors",
          "Multiple choice exercises with connectors",
        ],
      },
    ],
  },
  2: {
    title: "Past Continuous and Present Perfect",
    topics: [
      {
        name: "Past Continuous",
        examples: [
          "I was studying when you called",
          "They were playing tennis at 3 PM yesterday",
        ],
      },
      {
        name: "Present Perfect",
        examples: [
          "I have visited Paris three times",
          "She has lived here since 2020",
        ],
      },
    ],
  },
  3: {
    title: "Conditionals and Passive Voice",
    topics: [
      {
        name: "Zero and First Conditional",
        examples: [
          "If you heat water, it boils",
          "If it rains, I will stay home",
        ],
      },
      {
        name: "Passive Voice",
        examples: [
          "The house was built in 1990",
          "English is spoken worldwide",
        ],
      },
    ],
  },
  4: {
    title: "Grammar Review",
    topics: [
      {
        name: "Comprehensive Review",
        examples: [
          "Mixed tense exercises",
          "Error correction practice",
        ],
      },
    ],
  },
};

interface GrammarSectionProps {
  weekId: number;
}

const GrammarSection: React.FC<GrammarSectionProps> = ({ weekId }) => {
  const content = grammarContent[weekId as keyof typeof grammarContent];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center mb-6">
        <BookOpen className="h-6 w-6 text-blue-600 mr-2" />
        <h2 className="text-xl font-semibold text-gray-900">Grammar Focus</h2>
      </div>

      <div className="space-y-6">
        <h3 className="text-lg font-medium text-gray-800">{content.title}</h3>
        {content.topics.map((topic, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-800 mb-2">{topic.name}</h4>
            <div className="space-y-2">
              <div>
                <h5 className="text-sm font-medium text-gray-700 mb-1">Examples:</h5>
                <ul className="list-disc list-inside text-gray-600 text-sm">
                  {topic.examples.map((example, i) => (
                    <li key={i}>{example}</li>
                  ))}
                </ul>
              </div>
              {topic.exercises && (
                <div>
                  <h5 className="text-sm font-medium text-gray-700 mb-1">Practice Exercises:</h5>
                  <ul className="list-disc list-inside text-gray-600 text-sm">
                    {topic.exercises.map((exercise, i) => (
                      <li key={i}>{exercise}</li>
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

export default GrammarSection;