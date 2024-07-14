import { AnimatePresence, motion } from 'framer-motion';
import { FC, useState } from 'react';
import './App.css';

interface Props {
  onChange: (tab: number) => void | (() => void);
}

const contents = [
  { text: "Home", path: "/src/components/Home.tsx" },
  { text: "About", path: "/src/components/About.tsx" },
  { text: "Contact", path: "/src/components/Contact.tsx" }
]

export const App: FC<Props> = ({ onChange }) => {
  const [tab, setTab] = useState<number>(0)
  const [selectedTabText, setSelectedTabText] = useState<string>(contents[0].text)

  return (
    <div className='container mx-auto bg-white rounded-md shadow-md h-96 flex-col p-2'>
      <nav>
        <ul className='flex container justify-between h-12 border-slate-200 font-bold cursor-pointer rounded-md rounded-b-none mx-auto text-black w-full transition-colors text-center border-b-2 bg-white'>
          {contents.map((content, index) => (
            <li
              className={`flex items-center justify-center rounded-md rounded-b-none w-full h-full relative ${index === tab ? 'bg-slate-200' : ''}`}
              key={content.path}
              onClick={() => {
                setTab(index);
                setSelectedTabText(content.text);
                onChange(index)
              }}
            >
              <span className='flex items-center justify-center w-full h-full'>{content.text}</span>
              {index === tab && (
                <motion.div
                  className='underline absolute bottom-0 '
                  layoutId="underline"
                  style={{ borderBottom: "2px solid blue" }}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              )}
            </li>
          ))}
        </ul>
      </nav>
      <main className='font-bold text-7xl text-black h-full flex justify-center items-center'>
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {selectedTabText}
          </motion.div>
        </AnimatePresence>
      </main>
    </div >
  )
}
export default App;