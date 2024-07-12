import ProfilePicture from './Image/image';
import Openedu from './openedu/openedu';
import Codingplatform from './codingplatform/codingplatform';
import Notification from './notification/notification';
import Experience from './experience/experience';
import Projects from './projects/projects';
import Education from './education/education'

export default function Dashboard({userName,userEmailID,userBranch,userSection,userStat,}) {
  return (
    <>
      <main className="text-white flex justify-center mt-16 pt-10 pr-16 pl-16">
        <div className="w-full max-w-4xl border border-gray-300 p-4 bg-gray-900 rounded-lg shadow-lg">
          <div className="flex flex-row">
            {/* Section 1: Profile Picture */}
            <div className='flex '>
            <div className="mr-4 inline-block	">
              <ProfilePicture />
            </div>
            
            {/* Section 2: Details */}
            <div className="flex-1 flex flex-col gap-1 pl-2 pr-2 mt-4 text-lg font-bold"> {/* Adjusted padding */}
              <div>Name : <span className='font-normal'>Rahul Kumar{userName}</span></div>
              <div >Email : <span className='font-normal'>jaiyankargupta@gmail.com{userEmailID}</span></div>
              <div>Branch : <span className='font-normal'>Computer Engineering {userBranch}</span></div>
              <div>Section : <span className='font-normal'>CS-C {userSection}</span></div>
              <div>Stat : <span className='font-normal'>Admin{userStat}</span></div>
              
             
            </div>
            </div>
            
            {/* Section 3: Edit Button */}
            <div className="flex-1 text-end ml-4 inline-block	">
              <button className="bg-blue-500 text-white px-4 rounded font-semibold">Edit</button>
            </div>
          </div>
        </div>
      </main>
      <Openedu/>
      <Codingplatform/>
      <Notification/>
      <Experience/>
      <Projects/>
      <Education/>
    </>
  );
}
