import React from 'react';
import InputField from './InputField';
import TextArea from './TextArea';

const Form = ({ handleFormSubmit,title, setTitle, smallDesc, setSmallDesc, liveSite, setLiveSite, frontCode, setFrontCode, description, setDescription, primaryImage, handlePrimaryUpload, secondaryImage, handleSecondaryUpload, tertiaryImage, handleTertiaryUpload, showBackendInput, setShowBackendInput, backendLink, setBackendLink }) => {
  return (
    <form onSubmit={handleFormSubmit} className='w-2/3 mx-auto rounded-xl mt-5 bg-slate-400 p-5'>
      <div className='grid grid-cols-2 gap-4'>
        <InputField className="w-full rounded-md p-2 mt-2" labelStyle='text-xl ml-1' onchange={e => setTitle(e.target.value)} label="Title" value={title} id="title" placeholder="Title" />
        <InputField className="w-full rounded-md p-2 mt-2" labelStyle='text-xl ml-1' onchange={e => setSmallDesc(e.target.value)} label="Small Description" value={smallDesc} id="smallDesc" placeholder='Put a Small Description Here' />
        <InputField className="w-full rounded-md p-2 mt-2" labelStyle='text-xl ml-1' onchange={e => setLiveSite(e.target.value)} label="Live Site" value={liveSite} id="liveSite" placeholder='Put a Link for Live Site' />
        <InputField className="w-full rounded-md p-2 mt-2" labelStyle='text-xl ml-1' onchange={e => setFrontCode(e.target.value)} label="Code Link" value={frontCode} id="frontCode" placeholder='Github Link' />
      </div>
      <div className='my-2'>
        <TextArea className="w-full rounded-md py-2 px-1 mt-2" smallText="Add <br> for adding a new line" onChange={e => setDescription(e.target.value)} labelStyle='text-xl ml-1 flex items-baseline gap-[10px]' smallTextStyle="text-[12px]" label="Description" id="desc" value={description} placeholder='Features Description' />
      </div>

      <div className="grid grid-cols-3">
        <div className='my-2'>
          <h1 className='text-xl'>Primary Image:</h1>
          <div className="w-fit" style={{ background: primaryImage && "url(" + primaryImage + ')', backgroundSize: '100%' }}>
            <InputField className="w-[100px] rounded-md py-2 px-1 mt-2 h-[50px]" onchange={handlePrimaryUpload} type="file" id='primaryimg' />
          </div>
        </div>
        <div className='my-2'>
          <h1 className='text-xl'>Other Image:</h1>
          <div className="w-fit" style={{ background: secondaryImage && "url(" + secondaryImage + ')', backgroundSize: '100%' }}>
            <InputField className="w-[100px] rounded-md py-2 px-1 mt-2 h-[50px]" onchange={handleSecondaryUpload} type="file" id='primaryimg' />
          </div>
        </div>
        <div className='my-2'>
          <h1 className='text-xl'>Other Image:</h1>
          <div className="w-fit" style={{ background: tertiaryImage && "url(" + tertiaryImage + ')', backgroundSize: '100%' }}>
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