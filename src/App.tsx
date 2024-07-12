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
    <>
      <div className='flex container mx-auto w-1/2 h-screen'>
        <div className='flex container items-start h-4/5 bg-white rounded-md'>
          <div className='flex container justify-between h-12 border-blue-600 border-solid place-items-center font-bold cursor-pointer bg-slate-300 rounded-md mx-auto text-black items-center p-4'>
            {...contents.map((content, index) => (
              <>
                <div
                  onClick={() => {
                    setTab(index);
                    setSelectedTabText(content.text);
                    onChange(tab);
                  }}
                >
                  {content.text}
                </div>
                <div className='flex-none text-white'>
                  {selectedTabText}
                </div>
              </>
            ))}
          </div>
          <div className='font-bold h-10 text-black rounded-md'>
          </div>


        </div>
      </div>

    </>
  )
}
export default App;