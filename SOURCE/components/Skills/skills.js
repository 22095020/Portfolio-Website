import React, {useState} from 'react';
import './skills.css';
import icn from '../../assets/icons8-graduation-64.png';
import icn2 from '../../assets/tools.svg';
import icn3 from '../../assets/women-web-developer-with-laptop.svg';

const Skills = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab=(index) => {
      setToggleState(index);
    };

  return (
    // <div className='skillls'>these are skills</div>
    <section className='qualification section' id='skills'>
        <h2 className='section_title'>About</h2>
        {/* <span className='section_subtitle'>My Personal Journey</span> */}
        
        <div className='guilt'>
          <img src={icn3} alt="" className='sklbg'/>
            <div className='qualification_container container'>
                <div className='qualification_tabs'>
                    <div className={
                      toggleState === 1 ? 'qualification_button qualification_active button--flex'
                      : 'qualification_button  button--flex'
                      } onClick={() => toggleTab(1)}>
                      <img src={icn} alt="" className='qualification_icon'/>
                      Education
                    </div>

                    <div className={
                      toggleState === 2 ? 'qualification_button qualification_active button--flex'
                      : 'qualification_button  button--flex'} onClick={()=> toggleTab(2)}>
                      <img src={icn2} alt="" className='qualification_icon'/>
                      Skills
                    </div>
                </div>

                <div className='qualification_sections'>
                    <div className={
                      toggleState === 1 ? 'qualification_content qualification_content-active':
                      'qualification-content'}>

                      <div className='qualification_data right'>
                        <div className='box'>
                          <h3 className='qualification_title'>B Tech</h3>
                          <span className='qualification_subtitle'>IIT BHU</span>
                          <div className='qualification_calender'>
                            2022-Present
                          </div>
                        </div>

                        <div>
                          <span className='qualification_rounder'></span>
                          <span className='qualification_line'></span>
                        </div>
                      </div>

                      <div className='qualification_data'>
                        <div></div>

                        <div>
                          <span className='qualification_rounder'></span>
                          <span className='qualification_line'></span>
                        </div>
                      
                        <div>
                          <h3 className='qualification_title'>Senior Secondary Ed</h3>
                          <span className='qualification_subtitle'>Param Gyan</span>
                          <div className='qualification_calender'>
                            2020-2022
                          </div>
                        </div>
                      </div>

                      <div className='qualification_data right'>
                        <div>
                          <h3 className='qualification_title'>Secondary Education</h3>
                          <span className='qualification_subtitle'>DAV Schools</span>
                          <div className='qualification_calender'>
                            2015-2020
                          </div>
                        </div>

                        <div>
                          <span className='qualification_rounder'></span>
                          <span className='qualification_line'></span>
                        </div>
                      </div>

                     
                      

                    </div>
                    

                    <div className={
                      toggleState === 2 ? 'qualification_content qualification_content-active':
                      'qualification-content'}>

                      <div className='qualification_data'>
                        <div>
                          <h3 className='qualification_title'>Web Development</h3>
                          <span className='qualification_subtitle'>HTML,CSS,JavaScript</span>
                          <div className='qualification_calender'>
                            
                          </div>
                        </div>

                        <div>
                          <span className='qualification_rounder'></span>
                          <span className='qualification_line'></span>
                        </div>
                      </div>

                      <div className='qualification_data'>
                        <div></div>

                        <div>
                          <span className='qualification_rounder'></span>
                          <span className='qualification_line'></span>
                        </div>
                      
                        <div>
                          <h3 className='qualification_title'>Languages</h3>
                          <span className='qualification_subtitle'>C,C++,Python</span>
                          <div className='qualification_calender'>
                            
                          </div>
                        </div>
                      </div>

                      <div className='qualification_data'>
                        <div>
                          <h3 className='qualification_title'>Frameworks</h3>
                          <span className='qualification_subtitle'>numpy,pandas,Sklearn</span>
                          <div className='qualification_calender'>
                            
                          </div>
                        </div>

                        <div>
                          <span className='qualification_rounder'></span>
                          <span className='qualification_line'></span>
                        </div>
                      </div>


                    </div>


                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
