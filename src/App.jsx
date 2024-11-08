import data from "../data.json"

function App() {
  return (
    <>
      <section className="container">
        <div className="purple-box">
          <span className="title">Your Result</span>
          <div className="circle">
            <h2 className="total-score">76</h2>
            <span className="total">of 100</span>
          </div>
          <p className="performance-result">Great</p>
          <p className="performance-info">
            Your performance exceeded 65% of the people conducting the test
            here!
          </p>
        </div>
        <div className="white-box">
          <span className="title">Summary</span>
          <div className="summary-box">
            {data.map((item) => (
              <div className={`flex p-1 ${item.category.toLowerCase()}`}>
                <div className="name flex">
                  <img src={item.icon} alt={item.category} />
                  <p>{item.category}</p>
                </div>
                <p className="score">
                  <span>{item.score}</span> / 100
                </p>
              </div>
            ))}
            <button className="btn">Continue</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
