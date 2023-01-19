import React, { useState } from 'react';
import InputField from './InputField';
import TextArea from './TextArea';
import box from "./../Assets/box.png";
import checkmark from "./../Assets/checkmark.png";

const Form = ({ data }) => {
  const { handleFormSubmit, title, setTitle, smallDesc, setSmallDesc, liveSite, setLiveSite, frontCode, setFrontCode, description, setDescription, primaryImage, handlePrimaryUpload, secondaryImage, handleSecondaryUpload, tertiaryImage, handleTertiaryUpload, showBackendInput, setShowBackendInput, backendLink, setBackendLink } = data;
  const [checkmarkVisible, setCheckmarkVisible] = useState(false);
  return (
    <form onSubmit={handleFormSubmit} className='w-full lg:w-2/3 mx-auto mb-5 lg:mb-0 rounded-xl mt-5 bg-darkGray p-5'>
      <div className='grid grid-cols-2 gap-4'>
        <InputField className="w-full rounded-md p-2 mt-2" labelStyle='text-xl ml-1 text-white' onchange={e => setTitle(e.target.value)} label="Title" value={title} id="title" placeholder="Title" />
        <InputField className="w-full rounded-md p-2 mt-2" labelStyle='text-xl ml-1 text-white' onchange={e => setSmallDesc(e.target.value)} label="Small Description" value={smallDesc} id="smallDesc" placeholder='Put a Small Description Here' />
        <InputField className="w-full rounded-md p-2 mt-2" labelStyle='text-xl ml-1 text-white' onchange={e => setLiveSite(e.target.value)} label="Live Site" value={liveSite} id="liveSite" placeholder='Put a Link for Live Site' />
        <InputField className="w-full rounded-md p-2 mt-2" labelStyle='text-xl ml-1 text-white' onchange={e => setFrontCode(e.target.value)} label="Code Link" value={frontCode} id="frontCode" placeholder='Github Link' />
      </div>
      <div className='my-2'>
        <TextArea className="w-full rounded-md py-2 px-1 mt-2" smallText="Add <br> for adding a new line" onChange={e => setDescription(e.target.value)} labelStyle='text-xl ml-1 flex items-baseline gap-[10px] text-white' smallTextStyle="text-[12px]" label="Description" id="desc" value={description} placeholder='Features Description' />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3">
        <div className='my-2'>
          {/* <h1 className='text-xl'>Primary Image:</h1> */}
          <div className="w-fit" style={{ background: primaryImage && "url(" + primaryImage + ')', backgroundSize: '100%' }}>
            <InputField className="w-[100px] rounded-md py-2 px-1 mt-2 h-[50px]" label="Primary Image:" labelStyle="text-white" onchange={handlePrimaryUpload} type="file" id='primaryimg' />
          </div>
        </div>
        <div className='my-2'>
          {/* <h1 className='text-xl'>Other Image:</h1> */}
          <div className="w-fit" style={{ background: secondaryImage && "url(" + secondaryImage + ')', backgroundSize: '100%' }}>
            <InputField className="w-[100px] rounded-md py-2 px-1 mt-2 h-[50px]" label="Other Image:" labelStyle="text-white" onchange={handleSecondaryUpload} type="file" id='secondaryImage' />
          </div>
        </div>
        <div className='my-2'>
          {/* <h1 className='text-xl'>Other Image:</h1> */}
          <div className="w-fit" style={{ background: tertiaryImage && "url(" + tertiaryImage + ')', backgroundSize: '100%' }}>
            <InputField className="w-[100px] rounded-md py-2 px-1 mt-2 h-[50px]" label="Other Image:" labelStyle="text-white" onchange={handleTertiaryUpload} type="file" id='tertiaryImage' />
          </div>
        </div>
      </div>

      <div className='text-right'>
        <div className="font-medium flex gap-4 justify-end items-center relative">
          <input type="checkbox" id='checkbox' className='hidden' onChange={e => setShowBackendInput(e.target.checked)} />
          <label htmlFor="checkbox" className='text-white'>Have a Backend Link?</label>
          <div className="relative w-5 h-5">
            {showBackendInput && <img className='absolute w-3 top-0 right-0 left-0 bottom-0 m-auto' src={checkmark} alt="" />}
            <img className='absolute top-0 right-0' src={box} alt="" />
          </div>
        </div>

      </div>

      {showBackendInput && <InputField
        className="w-full rounded-md py-2 px-1 mt-2"
        label='Backend Link'
        labelStyle='cursor-pointer text-white'
        placeholder="Enter Backend Codes link"
        value={backendLink}
        onchange={e => setBackendLink(e.target.value)}
      />}

      <InputField
        type='submit'
        value='Add'
        className='cursor-pointer bg-white px-2 py-1 rounded mt-3'
      />
    </form>
  );
};

export default Form;