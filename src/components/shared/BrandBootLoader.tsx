type BrandBootLoaderProps = {
  active: boolean
}

const BrandBootLoader = ({ active }: BrandBootLoaderProps) => {
  const boxes = Array.from({ length: 8 }, (_, index) => index)

  return (
    <div
      className={`arevei-loader transition-all duration-700 ${
        active ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
      role="status"
      aria-label="Loading"
      aria-live="polite"
      aria-hidden={!active}
    >
      <div className="arevei-cube-loader" aria-hidden="true">
        {boxes.map((box) => (
          <div className={`arevei-cube-box arevei-cube-box${box}`} key={box}>
            <div />
          </div>
        ))}
        <div className="arevei-cube-ground">
          <div />
        </div>
      </div>
      <span className="sr-only">Arevei website is loading.</span>
    </div>
  )
}

export default BrandBootLoader
