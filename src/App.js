import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios"
import Form from './components/Form';
import List from './components/List';
import Details from './components/Details';

function App() {
  const [showBackendInput, setShowBackendInput] = useState(false);
  const [primaryImage, setPrimaryImage] = useState("")
  const [secondaryImage, setSecondaryImage] = useState("")
  const [tertiaryImage, setTertiaryImage] = useState("")
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [smallDesc, setSmallDesc] = useState("");
  const [liveSite, setLiveSite] = useState("");
  const [frontCode, setFrontCode] = useState("");
  const [backendLink, setBackendLink] = useState("");
  const [data, setData] = useState([]);
  const [updatedSuccessfully, setUpdatedSuccessfully] = useState(false);
  const [waiting, setWaiting] = useState(false);

  const handleFormSubmit = e => {
    e.preventDefault();

    // console.log(description.split(/\r?\n|\r|\n/g));
    setWaiting(true)
    axios.post("http://localhost:5000/projects", {
      title,
      smallDesc,
      liveSite: liveSite.includes("https://") ? liveSite : "https://" + liveSite,
      frontCode: frontCode.includes("https://") ? frontCode : "https://" + frontCode,
      backendLink,
      hasBackendLink: showBackendInput,
      primaryImage,
      details: description,
      secondaryImage,
      tertiaryImage,
      email: "smdshakibmia2001@gmail.com"
    }).then(res => {
      setUpdatedSuccessfully(res.data.status === 200)
      setWaiting(res.data.status !== 200)
      setTitle("");
      setSmallDesc("");
      setLiveSite("");
      setFrontCode("");
      setBackendLink("");
      setDescription("");
    })
  }

  useEffect(() => {
    axios.get('http://localhost:5000/projects').then(res => {
      setData(res.data)
    })
  }, [updatedSuccessfully])


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

    axios.post(url, imgForm).then(res => setTertiaryImage(res.data.data.display_url))
  }
  const handleSecondaryUpload = e => {
    const imgForm = new FormData()
    imgForm.append("image", e.target.files[0]);
    const url = 'https://api.imgbb.com/1/upload?key=42afc79fccd60ad9768d1aa145ddfaff'

    axios.post(url, imgForm).then(res => setSecondaryImage(res.data.data.display_url))
  }

  const detailedData = {
    waiting,
    handleFormSubmit,
    title,
    setTitle,
    smallDesc,
    setSmallDesc,
    liveSite,
    setLiveSite,
    frontCode,
    setFrontCode,
    description,
    setDescription,
    primaryImage,
    handlePrimaryUpload,
    secondaryImage,
    handleSecondaryUpload,
    tertiaryImage,
    handleTertiaryUpload,
    showBackendInput,
    setShowBackendInput,
    backendLink,
    setBackendLink
  }

  return (
    <div className='h-screen w-screen'>
      <h1 className='text-5xl text-center pt-10'>Project Management Website</h1>

      <div className="flex px-5 gap-5">
        <Form
          data={detailedData}
        />

        <List
          data={data}
          setUpdatedSuccessfully={setUpdatedSuccessfully}
          updatedSuccessfully={updatedSuccessfully}
        />
      </div>

      <Details />
    </div>
  );
}

export default App;
