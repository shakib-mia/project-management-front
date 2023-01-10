import { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TextArea from './components/TextArea';
import axios from "axios"

function App() {
  const [name, setName] = useState("");
  const [showBackendInput, setShowBackendInput] = useState(false);
  const [primaryImage, setPrimaryImage] = useState("")
  const [secondaryImage, setSecondaryImage] = useState("")
  const [tertiaryImage, setTertiaryImage] = useState("")

  const handleFormSubmit = e => {
    e.preventDefault();

    // console.log(name.split(/\r?\n|\r|\n/g));
    setName("")
  }


  const handlePrimaryUpload = e => {
    const imgForm = new FormData()
    imgForm.append("image", e.target.files[0]);
    const url = 'https://api.imgbb.com/1/upload?key=42afc79fccd60ad9768d1aa145ddfaff'
   
    axios.post(url, imgForm).then(res => setPrimaryImage(res.data.data.display_url))
  }

  const handleTertiaryUpload = e => {
    const imgForm = new FormData()
    imgForm.append("image", e.target.files[0]);
    const url = 'https://api.imgbb.com/1/upload?key=42afc79fccd60ad9768d1aa145ddfaff'
   
    axios.post(url, imgForm).then(res => setSecondaryImage(res.data.data.display_url))
  }

  const handleSecondaryUpload = e => {
    const imgForm = new FormData()
    imgForm.append("image", e.target.files[0]);
    const url = 'https://api.imgbb.com/1/upload?key=42afc79fccd60ad9768d1aa145ddfaff'
   
    axios.post(url, imgForm).then(res => setTertiaryImage(res.data.data.display_url))
  }

  return (
    <div className='bg-slate-600 h-screen w-screen'>
      <h1 className='text-5xl text-white text-center pt-10'>Project Management Website</h1>

      <form onSubmit={handleFormSubmit} className='w-2/3 mx-auto rounded-xl mt-5 bg-slate-400 p-5'>
        <div className='grid grid-cols-2 gap-4'>
          <InputField className="w-full rounded-md py-2 px-1 mt-2" labelStyle='text-xl ml-1' label="Title" id="title" placeholder="Title" />
          <InputField className="w-full rounded-md py-2 px-1 mt-2" labelStyle='text-xl ml-1' label="Small Description" id="smallDesc" placeholder='Put a Small Description Here' />
          <InputField className="w-full rounded-md py-2 px-1 mt-2" labelStyle='text-xl ml-1' label="Live Site" id="liveSite" placeholder='Put a Link for Live Site' />
          <InputField className="w-full rounded-md py-2 px-1 mt-2" labelStyle='text-xl ml-1' label="Code Link" id="codeLink" placeholder='Github Link' />
        </div>
        <div className='my-2'>
          <TextArea className="w-full rounded-md py-2 px-1 mt-2" labelStyle='text-xl ml-1' label="Description" id="desc" placeholder='Features Description' />
        </div>

        <div className="grid grid-cols-3">
          <div className='my-2'>
            <h1 className='text-xl'>Primary Image:</h1>
            <div className="w-fit" style={{background: primaryImage && "url("+ primaryImage+ ')', backgroundSize: '100%'}}>
              <InputField className="w-[100px] rounded-md py-2 px-1 mt-2 h-[50px]" onchange={handlePrimaryUpload} type="file" id='primaryimg' />
            </div>
          </div>
          <div className='my-2'>
            <h1 className='text-xl'>Other Image:</h1>
            <div className="w-fit" style={{background: secondaryImage && "url("+ secondaryImage+ ')', backgroundSize: '100%'}}>
              <InputField className="w-[100px] rounded-md py-2 px-1 mt-2 h-[50px]" onchange={handleSecondaryUpload} type="file" id='primaryimg' />
            </div>
          </div>
          <div className='my-2'>
            <h1 className='text-xl'>Other Image:</h1>
            <div className="w-fit" style={{background: tertiaryImage && "url("+ tertiaryImage+ ')', backgroundSize: '100%'}}>
              <InputField className="w-[100px] rounded-md py-2 px-1 mt-2 h-[50px]" onchange={handleTertiaryUpload} type="file" id='primaryimg' />
            </div>
          </div>
        </div>

        <div className='text-right'>
          <InputField
            label="Have a Backend Link"
            type="checkbox"
            className="ml-3"
            id="check"
            onchange={e => setShowBackendInput(e.target.checked)}
          />
        </div>

        {showBackendInput && <InputField
          className="w-full rounded-md py-2 px-1 mt-2"
          label='Backend Link'
          labelStyle='cursor-pointer'
          placeholder="Enter Backend Codes link"
        />}
      </form>
    </div>
  );
}

export default App;
