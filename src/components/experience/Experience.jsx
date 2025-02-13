import React from 'react';
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import styles from "../experience/Experience.module.css";

export const Experience = () => {
  return (
    <section  className={styles.container} id='Experience'>
        <h2 className={styles.title}>Skills & Experience</h2>   
        <div className={styles.content}>
            {skills.map((skill, id) => {
                return (
                <div key={id} className={styles.skill}>
                    <div className={styles.skillImgContainer}>
                        <img src={skill.imageSrc} alt={skill.title} />
                        {/* <h3>{skill.title}</h3> */}
                    </div>
                    <p>{skill.title}</p>
                </div>
                );
            })}
        </div><br />
        <ul className={styles.history}>
          {
            history.map((historyItem,id)=>{
              return <li key={id} className={styles.historyItem}>
                <img src={historyItem.imageSrc} alt={`{$historyItem.organisation}logo`}/>
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role},${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate}-${historyItem.endDate}`}</p>
                  <ul>{historyItem.experiences.map((experience,id)=>{
                    return <li key={id}>{experience}</li>
                  })}</ul>
                </div>
                </li>
                
            })
          }
        </ul>
    </section>
  )
}
