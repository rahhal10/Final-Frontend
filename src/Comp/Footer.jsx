import React from 'react'
import '../Css/Footer.css'

function Footer(){
	return (
		<footer className="site-footer" role="contentinfo">
			<div className="footer-inner">
				<div className="footer-grid">
					<div className="footer-brand">
						<div className="brand-logo" aria-hidden="true">
							<svg viewBox="0 0 24 24" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M3 7v10a1 1 0 0 0 1 1h16V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1z" fill="#7c3aed" opacity="0.95"/>
								<path d="M4 6l8 5 8-5" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
						</div>
						<div className="brand-name">LearnHub</div>
						<p className="brand-desc">Empowering learners worldwide with expert-led courses and interactive experiences.</p>
					</div>

					<div className="footer-col">
						<h4>Platform</h4>
						<ul>
							<li><a href="#">Courses</a></li>
							<li><a href="#">Features</a></li>
							<li><a href="#">Pricing</a></li>
						</ul>
					</div>

					<div className="footer-col">
						<h4>Company</h4>
						<ul>
							<li><a href="#">About</a></li>
							<li><a href="#">Careers</a></li>
							<li><a href="#">Contact</a></li>
						</ul>
					</div>

					<div className="footer-col">
						<h4>Support</h4>
						<ul>
							<li><a href="#">Help Center</a></li>
							<li><a href="#">Community</a></li>
							<li><a href="#">Blog</a></li>
						</ul>
					</div>
				</div>

				<hr className="footer-divider" />
				<div className="footer-bottom">© 2024 LearnHub. All rights reserved.</div>
			</div>
		</footer>
	)
}

export default Footer