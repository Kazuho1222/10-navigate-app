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
      <div className='flex container mx-auto w-1/2'>
        <div className='flex container items-start h-1/5 bg-white rounded-md rounded-b-none'>
          <div className='flex container justify-between h-12 border-blue-600 border-solid place-items-center font-bold cursor-pointer bg-slate-300 rounded-md rounded-b-none mx-auto text-black items-center p-4'>
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
              </>
            ))}
          </div>
        </div>
      </div>
      <div className='flex justify-center container w-1/2 font-bold mx-auto items-center h-80 text-black rounded-md rounded-t-none bg-white text-center text-7xl'>
        {selectedTabText}
      </div>


    </>
  )
}
export default App;