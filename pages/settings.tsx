import React from 'react';
import Layout from '../components/Layout';

function Settings() {
	return (
		<Layout title="Condit">
			<div className="settings-page">
				<div className="container page">
					<div className="row">
						<div className="col-md-6 offset-md-3 col-xs-12">
							<h1 className="text-xs-center">Your Settings</h1>
							<form>
								<fieldset>
									<fieldset className="form-group">
										<input type="text" className="form-control" placeholder="URL of profile picture" />
									</fieldset>
									<fieldset className="form-group">
										<input type="text" className="form-control form-control-lg" placeholder="Username" />
									</fieldset>
									<fieldset className="form-group">
										<textarea className="form-control form-control-lg" rows={8} placeholder="Short bio about you" />
									</fieldset>
									<fieldset className="form-group">
										<input type="email" className="form-control form-control-lg" placeholder="Email" />
									</fieldset>
									<fieldset className="form-group">
										<input type="password" className="form-control form-control-lg" placeholder="New Password" />
									</fieldset>
									<button className="btn btn-lg btn-primary pull-xs-right" type="submit">
										Update Settings
									</button>
								</fieldset>
							</form>
							<hr />
							<button className="btn btn-outline-danger">Or click here to logout.</button>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default Settings;
