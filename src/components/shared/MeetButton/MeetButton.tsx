import "./meetButton.css"
const MeetButton = ({details}:{details : string}) => {
    return (
      <div>
      <button className="btn h-[40px]"><i className="animation"></i>{details}<i className="animation"></i>
      </button>
  </div>

    )
}

export default MeetButton