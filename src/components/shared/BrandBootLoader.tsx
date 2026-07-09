type BrandBootLoaderProps = {
  active: boolean
}

const BrandBootLoader = ({ active }: BrandBootLoaderProps) => {
  return (
    <div
      className={`fixed inset-0 z-[120] flex items-center justify-center transition-all duration-700 ${
        active ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!active}
      role="status"
      aria-live="polite"
    >
      <div className="boot-loader-backdrop" />

      <div className="boot-loader-shell">
        <div className="boot-loader-mark" aria-hidden="true">
          <img
            src="/assets/images/NewAreveiFavicon.png"
            alt=""
            className="boot-loader-icon"
          />
        </div>

        <img
          src="/assets/images/NewWordmarkWhite.svg"
          alt="Arevei"
          className="boot-loader-wordmark"
        />

        <div className="boot-loader-progress" aria-hidden="true">
          <span />
        </div>

        <span className="sr-only">Arevei website is loading.</span>
      </div>
    </div>
  )
}

export default BrandBootLoader
