import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Book, Headphones, MessageSquare, Pen } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import WeeklyContent from './components/WeeklyContent';
import ErrorBoundary from './components/ErrorBoundary';
import NotFound from './components/NotFound';

const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
  </div>
);

function App() {
  const weeks = [
    {
      title: 'Week 1: Fundamentals and Reading Comprehension',
      topics: [
        'Present Simple and Continuous',
        'Past Simple',
        'Basic connectors',
        'Habits and routines',
        'Lifestyle and technology',
      ],
      skills: [
        { icon: Book, name: 'Reading', content: 'Text comprehension, matching titles, true/false exercises' },
        { icon: Headphones, name: 'Listening', content: 'Understanding daily conversations and short talks' },
        { icon: Pen, name: 'Writing', content: 'Emails and short paragraphs about daily routines' },
        { icon: MessageSquare, name: 'Speaking', content: 'Describing habits and giving opinions' },
      ],
    },
    {
      title: 'Week 2: Travel and Past Experiences',
      topics: [
        'Past Continuous',
        'Present Perfect Simple',
        'Modal verbs',
        'Travel vocabulary',
        'Personal experiences',
      ],
      skills: [
        { icon: Book, name: 'Reading', content: 'Travel texts, finding specific information' },
        { icon: Headphones, name: 'Listening', content: 'Travel announcements and stories' },
        { icon: Pen, name: 'Writing', content: 'Describing places and travel experiences' },
        { icon: MessageSquare, name: 'Speaking', content: 'Talking about trips and experiences' },
      ],
    },
    {
      title: 'Week 3: Urban Life and Hobbies',
      topics: [
        'Conditionals (0, 1st, 2nd)',
        'Passive Voice',
        'Relative Clauses',
        'City problems',
        'Hobbies and leisure',
      ],
      skills: [
        { icon: Book, name: 'Reading', content: 'Articles about city life and activities' },
        { icon: Headphones, name: 'Listening', content: 'Conversations about urban issues' },
        { icon: Pen, name: 'Writing', content: 'Essays about city problems and solutions' },
        { icon: MessageSquare, name: 'Speaking', content: 'Discussing urban issues and free time' },
      ],
    },
    {
      title: 'Week 4: Exam Preparation',
      topics: [
        'Grammar review',
        'Vocabulary consolidation',
        'Exam strategies',
        'Time management',
        'Practice tests',
      ],
      skills: [
        { icon: Book, name: 'Reading', content: 'Full practice tests and timing strategies' },
        { icon: Headphones, name: 'Listening', content: 'Exam-style listening exercises' },
        { icon: Pen, name: 'Writing', content: 'Timed writing tasks practice' },
        { icon: MessageSquare, name: 'Speaking', content: 'Mock speaking tests' },
      ],
    },
  ];

  return (
    <BrowserRouter basename="/EnglishB1_Diego">
      <ErrorBoundary>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home weeks={weeks} />} />
              <Route path="/week/:weekId" element={<WeeklyContent weeks={weeks} />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
