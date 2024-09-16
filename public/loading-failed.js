self.onerror = function (e) {
	function ac(s) {
		document.body.appendChild(document.createElement('p')).innerText = s
	}
	if (self.loading) {
		self.stop && self.stop()
		document.body.innerHTML = '<h1>:(</h1><h2 id=h2>Loading failed</h2><style>body{background-color:#2977e7;margin:32px;color:white;font-family:Arial}h1{font-size:80px}h2{margin:48px 0}</style>'
		if (Array.prototype.with) ac('Support ES2023')
		else {
			ac('Unsupported ES2023')
			self.h2.innerText += ', please upgrade or change browser'
		}
		var n
		function c(r) {
			return !!(n = r.exec(navigator.userAgent))
		}
		switch (true) {
			case c(/MSIE [\d\.]+/):
			case c(/Firefox\/[\d\.]+/):
			case c(/Chrome\/[\d\.]+/):
			case c(/Safari\/[\d\.]+/):
			case c(/Opera\/[\d\.]+/):
				break
			case c(/Trident\/[\d\.]+/):
				n = 'IE 11'
				break
			default:
				n = 'unknown'
		}
		if (navigator.userAgent.indexOf('Mobi') > -1) n += ' Mobile'
		ac('Browser: ' + n)
		ac('UserAgent: ' + navigator.userAgent)
		document.body.appendChild(document.createElement('div')).style.height = '1px'
	}
	self.root || ac('Error: ' + e)
}