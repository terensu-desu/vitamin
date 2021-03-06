import React, { Component } from 'react';

export default class DetailPage extends Component{
	constructor() {
		super();
		this.mapVisible = false;
		this.handleMapClick = this.handleMapClick.bind(this);
	}

	// If there is a map link, a button to display it will be visible - this function handles the hiding and displaying of the div and the open and close buttons.
	handleMapClick(e) {
		e.preventDefault();
		const mapStatus = this.mapVisible;
		if(mapStatus === false) {
			document.getElementById("mapOpenButton").classList.add("hidden");
			document.getElementById("mapCloseButton").classList.remove("hidden");
			document.getElementById("mapDiv").classList.remove("hidden");
		} else {
			document.getElementById("mapOpenButton").classList.remove("hidden");
			document.getElementById("mapCloseButton").classList.add("hidden");
			document.getElementById("mapDiv").classList.add("hidden");
		}
		this.mapVisible = !mapStatus;
	}

	// The user can change which photo to enlarge with this function. It is very hacky, however, so will want to return to this and see about improving it.
	// At the moment the pictures are on the page, but have the hidden (display: none) class. There should be a better way.
	handlePicClick(pic) {
		if(pic === "pic1") {
			document.getElementById("pic1").classList.remove("hidden");
			document.getElementById("pic2").classList.add("hidden");
			document.getElementById("pic3").classList.add("hidden");
		}else if(pic === "pic2") {
			document.getElementById("pic2").classList.remove("hidden");
			document.getElementById("pic1").classList.add("hidden");
			document.getElementById("pic3").classList.add("hidden");
		}else if(pic === "pic3") {
			document.getElementById("pic3").classList.remove("hidden");
			document.getElementById("pic2").classList.add("hidden");
			document.getElementById("pic1").classList.add("hidden");
		}
	}

	render() {
		const data = this.props.data;
		return (
			<div className="container">
				<div className="row">
					<div className="col s12">
						<div className="card horizontal card-round">
							<div className="card-stacked">
								<div className="card-content">
									<h4 className="no-margin-top"><span>{data.host}</span>さん</h4>
									<div className="row no-margin-bot">
										<div className="col s12">
											<div className="close-text display-linebreak">{data.subtitle}</div>
										</div>
									</div>
									<div className="divider"></div>
									<div className="row no-margin-bot">
										<div className="col s12">
											<div className="close-text"><i className="material-icons left">visibility</i><span>ステータス:</span> {data.status ? "オンライン!" : "オフライン"}</div>
											<div className="close-text"><i className="material-icons left">language</i><span>ガイドの言語: </span>{data.languages}</div>
											<div className="close-text"><i className="material-icons left">date_range</i><span>次の日:</span> {data.date}</div>
											<div className="close-text"><i className="material-icons left">access_time</i><span>予定時刻:</span> {data.time}</div>
											<div className="close-text"><i className="material-icons left">nature_people</i><span>集合場所:</span> {data.meeting}</div>
											<div className="row">
												<div className="col s12">
													<div className="star-ratings-detail-css left">
													  <div className="star-ratings-css-top" style={{width: "90%"}}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
													  <div className="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
													</div>
													<p className="reviews-text">12件のレビュー</p>
												</div>
											</div>
											<div className="row no-margin-bot">
												<div className="col s6">
													<a className="btn appointment-btn orange darken-3">予定を予約する!</a>
												</div>
												<div className="col s6 center">
													<a href="#!"><i className="vit-accent social-icons fa fa-facebook-square fa-2x" aria-hidden="true"></i><p className="hidden">Facebook</p></a>
													<a href="#!"><i className="vit-accent social-icons fa fa-twitter-square fa-2x" aria-hidden="true"></i><p className="hidden">Twitter</p></a>
													<a href="#!"><i className="vit-accent social-icons fa fa-google-plus-square fa-2x" aria-hidden="true"></i><p className="hidden">Google+</p></a>
													<a href="#!"><i className="vit-accent social-icons fa fa-envelope fa-2x" aria-hidden="true"></i><p className="hidden">Email</p></a>
													<a href="#!"><i className="vit-accent social-icons fa fa-heart fa-2x" aria-hidden="true"></i><p className="hidden">Save</p></a>
												</div>
											</div>
										</div>
									</div>
									<hr/>
									<div className="row no-margin-bot">
										<div className="col s12">
											<div className="close-text">
												<i className="material-icons left">note</i><span>持ち物</span>
											</div>
											<div className="close-text">
												{data.memo}
											</div>
											<hr/>
										</div>
									</div>
									<div className="row">
										<div className="col s12">
											<div className="close-text">
												<i className="material-icons left">face</i><span>ホストのプロファイル</span>
											</div>
											<div className="display-linebreak close-text">
												{data.profile}
											</div>
										</div>
									</div>
									<br/>
									<div className="row hide-on-large-only show-on-medium-and-down">
										<div className="col center s12">
											<img className="responsive-img " src={data.main_img} alt="host promo" />
										</div>
									</div>
									<div className="row center hide-on-large-only show-on-medium-and-down">
										<div className="col s3 offset-s2">
											<img className="thumbnail hoverable" src={data.main_img} alt="host promo"/>
										</div>
										<div className="col s3">
											<img className="thumbnail hoverable" src={data.sec_img} alt="host promo"/>
										</div>
										<div className="col s3">
											<img className="thumbnail hoverable" src={data.thr_img} alt="host promo"/>
										</div>
									</div>
								</div>
								{data.map_url ? 
								<div className="card-action">
									<div className="row">
										<br/>
										<div className="center col s12">
											<a id="mapOpenButton" className="btn appointment-btn orange darken-3" onClick={this.handleMapClick}>See the event on the map! <i className="material-icons right">expand_more</i></a>
											<a id="mapCloseButton" className="btn appointment-btn orange darken-3 hidden" onClick={this.handleMapClick}>Close the map. <i className="material-icons right">expand_less</i></a>
										</div>
										<br/>
										<div id="mapDiv" className="col s12 hidden">
											<iframe className="area-map" title="map" src={data.map_url} allowFullScreen></iframe>
										</div>
									</div> 
								</div>
								: null
								}
							</div>
							<div className="card-image hide-on-med-and-down">
								<img id="pic1" className="responsive-img page-main-img card-image-semi-round" src={data.main_img} alt="host promo"/>
								<img id="pic2" className="hidden responsive-img page-main-img card-image-semi-round" src={data.sec_img} alt="host promo"/>
								<img id="pic3" className="hidden responsive-img page-main-img card-image-semi-round" src={data.thr_img} alt="host promo"/>
								<div className="container thumbnail-container close-text">
									<div className="row center">
										<div className="col s4">
											<img onClick={()=>this.handlePicClick("pic1")} className="thumbnail hoverable" src={data.main_img} alt="host promo"/>
										</div>
										<div className="col s4">
											<img onClick={()=>this.handlePicClick("pic2")} className="thumbnail hoverable" src={data.sec_img} alt="host promo"/>
										</div>
										<div className="col s4">
											<img onClick={()=>this.handlePicClick("pic3")} className="thumbnail hoverable" src={data.thr_img} alt="host promo"/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}