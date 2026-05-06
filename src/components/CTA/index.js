import './index.css'

 const CTA = () => {
  return (
    <div className="cta">
  <h1>Join the World’s Most Powerful Retail Platform</h1>
  <p>Partner with us as a retailer, sponsor, or event collaborator.</p>
  <button
    onClick={() => window.location.href = "mailto:leasing@mall.com"}

  >Start Partnership</button>
</div>
  )
}
export default CTA

