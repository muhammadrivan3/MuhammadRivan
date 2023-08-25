
const numHexagonSVGs = 30;
const animationDuration = 5;
 const [hoveredHexagon, setHoveredHexagon] = useState(null);

const handleHexagonHover = (index) => {
  setHoveredHexagon(index);
};

const handleHexagonLeave = () => {
  setHoveredHexagon(null);
};
{/* background hexagon */}
{Array.from({ length: numHexagonSVGs }).map((_, index) => {
    return(<div  key={index+"ucok"} >
      <div
        className="relative"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(30, 1fr)",
          gap: "0px",
          
        }}
      >
        {Array.from({ length: numHexagonSVGs }).map((_, index) => {
           const animationDelay = (index % 30) * 1; // Delay animasi untuk setiap hexagon

          return (
            <>
            <Hexagon
              key={index}
              className="hexagon"
             style={{ animation: `fillAnimation ${animationDuration}s ease-in-out ${
              hoveredHexagon === index ? "0s" : (index % 30) * 1 + "s"
            } infinite alternate`,}}
            />
            
            </>
          );
        })}
      </div>
      <div
        className="relative"
        style={{
          display: "grid",
          left: "-49px",
          gridTemplateColumns: "repeat(30, 1fr)",
          gap: "0px",
        }}
      >
        {Array.from({ length: numHexagonSVGs }).map((_, index) => {
          const animationDelay = (index % 30) * 0.5;
          return (
            <Hexagon
              key={index}
              className="hexagon"
              style={{
                left: "18%",
                // animation: `fillAnimation ${animationDuration}s ease-in-out ${animationDelay}s infinite alternate`,
              }}
            />
          );
        })}
      </div>
    </div>)
    })}