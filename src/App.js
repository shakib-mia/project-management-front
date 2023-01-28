import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios"
import Form from './components/Form';
import List from './components/List';
import Details from './components/Details';
import { projectsUrl } from './components/links/links';
import { getProjects } from './components/apiCalls.js';

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
  const [updatedSuccessfully, setUpdatedSuccessfully] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [detailedItem, setDetailedItem] = useState({});

  const [projects, setProjects] = useState([])

  useEffect(() => {
    getProjects(projectsUrl, setProjects)
  }, [updatedSuccessfully])

  const handleFormSubmit = e => {
    e.preventDefault();

    // console.log(description.split(/\r?\n|\r|\n/g));
    setWaiting(true)
    axios.post(projectsUrl, {
      title,
      smallDesc,
      liveSite: liveSite.includes("https://") ? liveSite : "https://" + liveSite,
      frontCode: frontCode.includes("https://") ? frontCode : "https://" + frontCode,
      backendLink: backendLink.includes("https://") ? backendLink : "https://" + backendLink,
      hasBackendLink: showBackendInput,
      primaryImage,
      details: description,
      secondaryImage,
      tertiaryImage
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

  const showDetails = (item) => {
    setDetailsVisible(true);
    setDetailedItem(item);
  }

  return (
    <div className={`lg:h-screen w-screen bg-light ${detailsVisible && "h-screen overflow-hidden"}`}>
      <h1 className='w-3/4 mx-auto lg:w-full text-3xl lg:text-5xl text-center font-medium pt-10 mb-5'>Project Management Website</h1>

      <div className="flex flex-col-reverse lg:flex-row px-5 gap-5">
        <Form
          data={detailedData}
        />

        <List
          onClick={showDetails}
          data={projects}
          setUpdatedSuccessfully={setUpdatedSuccessfully}
          updatedSuccessfully={updatedSuccessfully}
        />
      </div>

      {detailsVisible && <Details updatedSuccessFully={updatedSuccessfully} setUpdatedSuccessfully={setUpdatedSuccessfully} selectedItem={detailedItem} setDetailsVisible={setDetailsVisible} name='hello' />}
    </div>
  );
}

export default App;
