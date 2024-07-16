import React from 'react'
import { useParams } from 'react-router-dom'
import { CourseDatas } from '../Datas.jsx'

const CourseList = () => {
    const { id } = useParams();
    const filteredCourses = id ? CourseDatas.filter(item => item.course_id === parseInt(id)) : CourseDatas;

    return (
        <div className='p-4'>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
                {
                    filteredCourses.map(item => (
                        <div key={item.id} className="col">
                            <div className="card h-100">
                                <img src={item.image_url} className="card-img-top" alt={item.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CourseList;
