import React from 'react'

const Record = ({type,amount,status,date}) => {
  return (
    <>
    <div className="rec-mainn">
        <div className="rec-main-content">
          <div>
            <p className="date-p">{date}</p>
            <p className="red-pp">
              {type} <span className="date-p1">{amount}</span>
            </p>
          </div>
          <div className="success-div">{status}</div>
        </div>
      </div>
     </>
  )
}

export default Record