import React from "react";
// import { func, string } from "prop-types";
import styled from "styled-components";
import Link from "next/link";
import animationData from "../public/static/images/lf30_editor_qQ1FOd.json";
import {
	AiOutlineCode,
	AiOutlineRocket,
	AiOutlineCustomerService,
	AiOutlineTrophy,
	AiOutlineMedium,
	AiOutlineInstagram,
	AiOutlineTwitter,
	AiOutlineGithub
} from "react-icons/ai";

const SubHeading = styled.h3`
	font-family: Sen !important;
	font-weight: 700;
	color: #424242;
	margin-top: 40px;
`;

const Title = styled.h4`
	font-family: Sen !important;
	font-weight: 700;
	color: #424242;
	margin-top: 12px;
`;

const Paragraph = styled.p`
	font-family: Sen !important;
	font-size: 16px;
	color: #707070;
	margin-top: 16px;
`;

const TextBody = styled.p`
	font-family: Sen !important;
	font-size: 14px;
	color: #707070;
`;

const Button = styled.button`
	font-family: Sen;
	margin-top: 16px;
	font-weight: 700;
	padding: 8px 32px;
	border-radius: 4px;
	background: #4285f4;
	border: none;
	font-size: 16px;
	color: #fff;
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.16), 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const SocialWrapper = styled.div`
	display: flex;
	margin-top: 40px;
	flex-direction: row;
	justify-content: space-between;
	width: 40%;
`;

const SocialMedia = styled.a`
	text-decoration: none;
	cursor: pointer;
	svg {
		border-radius: 50%;
		background: #424242;
		&:hover {
			background: #1a73e8;
		}
		color: #ffffff !important;
		font-size: 40px;
		padding: 8px;
		transition: 0.2s all ease;
		box-shadow: 0 2px 2px 0 rgba(53, 109, 241, 0.14),
			0 3px 1px -2px rgba(52, 109, 241, 0.2),
			0 1px 5px 0 rgba(52, 109, 241, 0.12);
	}
`;

const Icon = styled.div`
	font-size: 48px;
	color: ${props => {
		switch (props.type) {
			case "red":
				return "#DB4437";
			case "blue":
				return "#1A73E8";
			case "green":
				return "#0F9D58";
			case "yellow":
				return "#F4B400";
			default:
				return "#565859";
		}
	}};
`;

const ExtLink = styled.a`
	text-decoration: none;
	font-family: Sen !important;
	margin-right: 12px;
	color: #0f9d58;
	font-weight: 700;
	font-size: 16px;
	transition: 0.2s all ease;
	&:hover {
		transition: 0.2s all ease;
		color: #4285f4;
		text-decoration: underline;
	}
`;

const Slider = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
`;

const Stack = styled.div`
	font-size: 32px;
	opacity: 0.6;
	width: 100px;
	padding: 16px;
	transition: 0.2s all ease;
	&:hover {
		transition: 0.2s all ease;
		opacity: 1;
	}
`;

const About = () => {
	return (
		<div className="container mb-5 mt-5">
			<SubHeading>What we do?</SubHeading>
			<div className="row">
				<div className="col-lg-6">
					<Paragraph>
						Google collaborates with university students who are
						passionate about growing developer communities.
						<br />
						<br />
						Developer Student Clubs powered by Google Developers is
						an initiative to help students to grow their knowledge
						on developer technologies and more through peer to peer
						workshops and events, and gain relevant industry
						experience.
					</Paragraph>
					<Button>SIGN UP</Button>
					<br />
					<br />
					<ExtLink
						href="https://developers.google.com/programs/dsc/"
						target="_blank"
					>
						Learn more about the Program
					</ExtLink>
				</div>
				<div className="col-lg-6">
					<div className="row">
						<div className="col-12 col-sm-6">
							<Icon type="red">
								<AiOutlineRocket />
							</Icon>
							<Title>Projects</Title>
							<TextBody>
								Projects with a social impact that help a lot of
								people.
							</TextBody>
						</div>

						<div className="col-12 col-sm-6">
							<Icon type="blue">
								<AiOutlineTrophy />
							</Icon>
							<Title>Hackathons</Title>
							<TextBody>
								Dream. Explore. Wonder. Build it Together.
							</TextBody>
						</div>

						<div className="col-12 col-sm-6">
							<Icon type="yellow">
								<AiOutlineCustomerService />
							</Icon>
							<Title>Webinars</Title>
							<TextBody>
								Join live coding sessions and AMAs to explore.
							</TextBody>
						</div>

						<div className="col-12 col-sm-6">
							<Icon type="green">
								<AiOutlineCode />
							</Icon>
							<Title>Bootcamps</Title>
							<TextBody>
								Learn & Implement with us in detailed bootcamps.
							</TextBody>
						</div>
					</div>
				</div>
			</div>

			<SubHeading className="mt-5">What DSC KIET does?</SubHeading>
			<div className="row">
				<div className="col-lg-6">
					<Paragraph>
						Developer Student Club KIET is inspired by Google
						Developers' Family.
						<br />
						<br />
						The motive is to create a ecosystem of programmers &
						developers in the campus by helping them to learn and
						build projects.
					</Paragraph>
					<SocialWrapper>
						<SocialMedia href="https://medium.com/dsckiet">
							<AiOutlineMedium />
						</SocialMedia>

						<SocialMedia href="https://instagram.com/dsckiet">
							<AiOutlineInstagram />
						</SocialMedia>

						<SocialMedia href="https://twitter.com/dsckiet">
							<AiOutlineTwitter />
						</SocialMedia>

						<SocialMedia href="https://github.com/dsckiet">
							<AiOutlineGithub />
						</SocialMedia>
					</SocialWrapper>
				</div>
				<div className="col-lg-6">
					{/* <marquee scrolldelay="15" behaviour="slide" truespeed="1"> */}
					<Slider>
						<Stack>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="2em"
								height="2em"
								viewBox="0 0 256 361"
								preserveAspectRatio="xMinYMin meet"
							>
								<title>HTML</title>
								<path
									d="M255.555 70.766l-23.241 260.36-104.47 28.962-104.182-28.922L.445 70.766h255.11z"
									fill="#E44D26"
								/>
								<path
									d="M128 337.95l84.417-23.403 19.86-222.49H128V337.95z"
									fill="#F16529"
								/>
								<path
									d="M82.82 155.932H128v-31.937H47.917l.764 8.568 7.85 88.01H128v-31.937H85.739l-2.919-32.704zM90.018 236.542h-32.06l4.474 50.146 65.421 18.16.147-.04V271.58l-.14.037-35.568-9.604-2.274-25.471z"
									fill="#EBEBEB"
								/>
								<path d="M24.18 0h16.23v16.035h14.847V0h16.231v48.558h-16.23v-16.26H40.411v16.26h-16.23V0zM92.83 16.103H78.544V0h44.814v16.103h-14.295v32.455h-16.23V16.103h-.001zM130.47 0h16.923l10.41 17.062L168.203 0h16.93v48.558h-16.164V24.49l-11.166 17.265h-.28L146.35 24.49v24.068h-15.88V0zM193.21 0h16.235v32.508h22.824v16.05h-39.06V0z" />
								<path
									d="M127.89 220.573h39.327l-3.708 41.42-35.62 9.614v33.226l65.473-18.145.48-5.396 7.506-84.08.779-8.576H127.89v31.937zM127.89 155.854v.078h77.143l.64-7.178 1.456-16.191.763-8.568H127.89v31.86z"
									fill="#FFF"
								/>
							</svg>
						</Stack>
						<Stack>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="2em"
								height="2em"
								viewBox="0 0 256 361"
								preserveAspectRatio="xMidYMid"
							>
								<title>CSS</title>
								<path
									d="M127.844 360.088L23.662 331.166.445 70.766h255.11l-23.241 260.36-104.47 28.962z"
									fill="#264DE4"
								/>
								<path
									d="M212.417 314.547l19.86-222.49H128V337.95l84.417-23.403z"
									fill="#2965F1"
								/>
								<path
									d="M53.669 188.636l2.862 31.937H128v-31.937H53.669zM47.917 123.995l2.903 31.937H128v-31.937H47.917zM128 271.58l-.14.037-35.568-9.604-2.274-25.471h-32.06l4.474 50.146 65.421 18.16.147-.04V271.58z"
									fill="#EBEBEB"
								/>
								<path d="M60.484 0h38.68v16.176H76.66v16.176h22.506v16.175H60.484V0zM106.901 0h38.681v14.066h-22.505v2.813h22.505v32.352h-38.68V34.46h22.505v-2.813H106.9V0zM153.319 0H192v14.066h-22.505v2.813H192v32.352h-38.681V34.46h22.505v-2.813H153.32V0z" />
								<path
									d="M202.127 188.636l5.765-64.641H127.89v31.937h45.002l-2.906 32.704H127.89v31.937h39.327l-3.708 41.42-35.62 9.614v33.226l65.473-18.145.48-5.396 7.506-84.08.779-8.576z"
									fill="#FFF"
								/>
							</svg>
						</Stack>
						<Stack>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 128 128"
								height="2em"
								width="2em"
							>
								<title>JavaScript</title>
								<path
									fill="#F0DB4F"
									d="M2 1v125h125v-125h-125zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065-.001-10.115.046-20.188.046-30.188h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"
								/>
							</svg>
						</Stack>

						<Stack>
							<svg
								width="2em"
								height="2em"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="-11.5 -10.23174 23 20.46348"
							>
								<title>ReactJS</title>
								<circle cx="0" cy="0" r="2.05" fill="#61dafb" />
								<g
									stroke="#61dafb"
									stroke-width="1"
									fill="none"
								>
									<ellipse rx="11" ry="4.2" />
									<ellipse
										rx="11"
										ry="4.2"
										transform="rotate(60)"
									/>
									<ellipse
										rx="11"
										ry="4.2"
										transform="rotate(120)"
									/>
								</g>
							</svg>
						</Stack>

						<Stack>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 128 128"
								width="2em"
								height="2em"
							>
								<title>NodeJS</title>
								<path
									fill="#83CD29"
									d="M112.678 30.334l-44.143-25.605c-2.781-1.584-6.424-1.584-9.227 0l-44.488 25.605c-2.869 1.651-4.82 4.754-4.82 8.073v51.142c0 3.319 1.992 6.423 4.862 8.083l11.729 6.688c5.627 2.772 7.186 2.772 9.746 2.772 8.334 0 12.662-5.039 12.662-13.828v-50.49c.001-.713.446-1.774-.255-1.774h-5.622c-.712 0-2.122 1.061-2.122 1.773v50.49c0 3.896-3.616 7.773-10.202 4.48l-12.122-7.013c-.422-.23-.676-.693-.676-1.181v-51.142c0-.482.463-.966.891-1.213l44.378-25.561c.415-.235 1.002-.235 1.415 0l43.963 25.555c.421.253.354.722.354 1.219v51.142c0 .488.092.963-.323 1.198l-44.133 25.576c-.378.227-.87.227-1.285 0l-11.317-6.749c-.341-.198-.752-.269-1.08-.086-3.145 1.783-3.729 2.02-6.679 3.043-.727.253-1.799.692.408 1.929l14.798 8.754c1.416.82 3.027 1.246 4.647 1.246 1.642 0 3.249-.426 4.666-1.246l43.976-25.582c2.871-1.672 4.322-4.764 4.322-8.083v-51.142c-.001-3.319-1.452-6.414-4.323-8.073zM77.727 81.445c-11.727 0-14.309-3.235-15.17-9.066-.102-.628-.634-1.379-1.274-1.379h-5.73c-.709 0-1.28.86-1.28 1.566 0 7.466 4.06 16.512 23.454 16.512 14.038 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.104 0 12.46 1.954 13.841 8.091.119.577.646.991 1.241.991h5.754c.354 0 .691-.143.939-.396.241-.272.367-.613.336-.979-.893-10.569-7.913-15.494-22.112-15.494-12.632 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.956-3.978 7.067-13.308 7.067z"
								/>
							</svg>
						</Stack>

						<Stack>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 128 128"
								width="2em"
								height="2em"
							>
								<title>MongoDB</title>
								<path
									clip-rule="evenodd"
									fill="#4faa41"
									fill-rule="evenodd"
									d="M 82.803 34.23 c -2.604 -8.108 -6.781 -15.284 -12.667 -21.459 c -1.488 -1.562 -3.142 -2.993 -4.18 -4.936 c -0.656 -1.23 -1.281 -2.477 -1.92 -3.715 l -0.406 -1.021 l -0.113 0.402 c -0.053 2.02 -1.197 3.389 -2.621 4.668 c -1.604 1.438 -3.096 3 -4.636 4.509 l -4.736 6.229 l -3.829 7.042 l -2.561 6.915 l -0.077 0.107 c -1.409 4.629 -2.104 9.389 -2.445 14.195 c -0.129 1.807 0.019 3.639 0.12 5.455 c 0.145 2.596 0.596 5.147 1.272 7.66 c 2.457 9.126 7.444 16.695 14.263 23.127 c 1.266 1.195 2.635 2.282 3.956 3.418 l 0.585 2.008 l 0.544 3.116 l 0.26 3.253 c -0.003 0.66 -0.03 1.323 0.009 1.981 c 0.011 0.169 0.231 0.325 0.355 0.487 l 1.104 0.388 l 1.149 0.447 l -0.197 -2.891 l -0.009 -2.848 l 0.397 -4.338 l 0.288 -0.944 l 0.825 -1.461 c 1.018 -0.818 2.109 -1.562 3.036 -2.473 c 1.677 -1.647 3.351 -3.317 4.852 -5.122 c 1.947 -2.341 3.623 -4.896 4.969 -7.636 c 0.899 -1.833 1.747 -3.703 2.448 -5.618 c 0.618 -1.688 1.001 -3.463 1.488 -5.2 l 0.128 -0.375 c 1.005 -4.688 1.174 -9.424 0.805 -14.19 c -0.297 -3.841 -1.2 -7.548 -2.456 -11.18 Z m -19.9 50.275 c 0.154 -0.771 0.345 -1.538 0.484 -2.312 c -0.139 0.774 -0.329 1.541 -0.484 2.312 Z m 3.417 0.532 l -0.646 -1.415 l 0.646 1.415 l 0.949 0.811 l -0.949 -0.811 Z M 106.474 102.964 c -0.826 -1.583 -2.038 -2.785 -3.64 -3.574 c -1.342 -0.66 -2.785 -0.95 -4.269 -0.992 c -1.112 -0.032 -2.228 0.025 -3.342 0.039 c -0.989 0.012 -1.979 0.029 -2.968 0.02 c -1.163 -0.012 -2.326 -0.047 -3.489 -0.08 c -0.193 -0.006 -0.33 0.033 -0.42 0.229 c -0.141 0.305 -0.308 0.599 -0.481 0.933 l 0.194 0.062 c 0.577 0.102 1.157 0.189 1.731 0.304 c 0.738 0.147 1.07 0.571 1.104 1.193 c 0.05 0.886 0.07 1.774 0.067 2.662 c -0.015 3.514 -0.04 7.028 -0.066 10.541 c -0.002 0.232 -0.006 0.474 -0.069 0.692 c -0.073 0.252 -0.152 0.578 -0.34 0.702 c -0.325 0.216 -0.728 0.362 -1.115 0.425 c -0.561 0.092 -0.655 0.117 -0.83 0.669 l -0.076 0.276 c -0.084 0.301 -0.039 0.36 0.275 0.363 c 1.802 0.02 3.603 0.059 5.404 0.053 c 1.643 -0.006 3.286 0.094 4.923 -0.215 c 1.547 -0.291 2.991 -0.801 4.309 -1.664 c 1.71 -1.121 2.94 -2.619 3.589 -4.574 c 0.524 -1.579 0.641 -3.19 0.463 -4.841 c -0.121 -1.139 -0.427 -2.212 -0.954 -3.223 Z m -3.157 9.661 c -0.964 1.794 -2.402 2.992 -4.457 3.308 c -1.287 0.197 -2.576 0.14 -3.803 -0.347 c -0.777 -0.308 -1.066 -0.979 -1.09 -1.772 c -0.023 -0.777 -0.032 -1.555 -0.033 -2.332 c -0.004 -2.734 -0.004 -5.468 0 -8.201 c 0.002 -0.861 0.017 -1.724 0.031 -2.586 c 0.01 -0.606 0.137 -0.809 0.728 -0.858 c 2.596 -0.218 5.073 0.062 7.13 1.889 c 1.272 1.13 1.996 2.571 2.297 4.226 c 0.125 0.69 0.163 1.396 0.241 2.096 c -0.063 1.598 -0.279 3.153 -1.044 4.577 Z M 125.106 109.664 c -0.512 -1.246 -1.482 -2.027 -2.701 -2.527 c -0.416 -0.171 -0.845 -0.312 -1.294 -0.478 l 0.157 -0.1 c 0.485 -0.311 1.025 -0.562 1.443 -0.945 c 1.016 -0.931 1.438 -2.102 1.24 -3.493 c -0.188 -1.323 -0.848 -2.294 -2.027 -2.924 c -1.07 -0.57 -2.224 -0.778 -3.418 -0.777 c -2.066 0.002 -4.133 0.033 -6.199 0.037 c -0.712 0.001 -1.424 -0.052 -2.136 -0.062 c -0.138 -0.002 -0.343 0.033 -0.402 0.125 c -0.163 0.25 -0.271 0.538 -0.387 0.816 c -0.067 0.162 -0.001 0.251 0.184 0.275 c 0.497 0.068 0.993 0.153 1.491 0.227 c 0.688 0.103 1.021 0.461 1.063 1.154 l 0.009 0.411 c 0.001 2.155 0.008 4.31 -0.001 6.465 c -0.011 2.151 -0.035 4.304 -0.061 6.456 c -0.003 0.271 -0.04 0.543 -0.079 0.812 c -0.059 0.406 -0.276 0.686 -0.692 0.774 l -1.177 0.232 c -0.139 0.028 -0.34 0.024 -0.397 0.11 c -0.216 0.323 -0.39 0.676 -0.366 1.102 l 0.121 0.033 l 3.953 0.097 l 0.793 -0.003 c 1.368 -0.016 2.738 0.011 4.104 -0.059 c 1.479 -0.074 2.868 -0.513 4.152 -1.268 c 1.367 -0.805 2.419 -1.866 2.793 -3.462 c 0.24 -1.019 0.241 -2.044 -0.166 -3.028 Z m -10.043 -9.181 c 0.006 -0.433 0.197 -0.621 0.627 -0.632 c 1.059 -0.029 2.111 -0.023 3.133 0.342 c 1.322 0.472 2.135 1.612 2.12 3.005 c -0.007 0.535 0.001 1.065 -0.196 1.579 c -0.389 1.012 -1.135 1.546 -2.193 1.65 c -0.552 0.056 -1.109 0.062 -1.601 0.088 l -1.642 -0.072 c -0.218 -0.008 -0.313 -0.104 -0.312 -0.328 l 0.064 -5.632 Z m 6.806 13.494 c -0.529 1.151 -1.493 1.756 -2.7 1.966 c -0.965 0.168 -1.938 0.119 -2.892 -0.127 c -0.706 -0.181 -0.994 -0.748 -1.135 -1.377 c -0.095 -0.421 -0.079 -0.922 -0.087 -1.36 c -0.013 -0.676 -0.003 -2.079 -0.003 -2.079 h -0.014 c 0 -1 0.003 -1.866 -0.003 -2.825 c -0.001 -0.207 0.034 -0.31 0.287 -0.302 c 0.898 0.027 1.799 0.042 2.697 0.077 c 0.803 0.031 1.555 0.269 2.262 0.65 c 1.076 0.58 1.724 1.468 1.902 2.688 c 0.136 0.925 0.078 1.835 -0.314 2.689 Z M 23.282 115.055 l 0.019 -5.437 c 0.003 -0.818 -0.101 -1.62 -0.369 -2.396 c -0.739 -2.137 -2.777 -3.11 -4.899 -2.343 c -0.965 0.349 -1.83 0.878 -2.656 1.478 c -0.481 0.35 -0.481 0.35 -0.829 -0.149 c -0.985 -1.412 -2.392 -1.895 -4.03 -1.374 c -1.059 0.336 -1.985 0.911 -2.862 1.579 c -0.082 0.062 -0.247 0.131 -0.296 0.094 c -0.082 -0.061 -0.139 -0.206 -0.137 -0.315 l 0.06 -0.966 c 0.005 -0.203 -0.034 -0.407 -0.054 -0.62 c -0.396 0.137 -0.712 0.274 -1.043 0.354 c -1.023 0.25 -2.053 0.48 -3.082 0.715 c -0.249 0.057 -0.512 0.132 -0.536 0.418 c -0.025 0.281 0.246 0.328 0.456 0.412 c 0.442 0.178 0.881 0.367 1.318 0.559 c 0.367 0.162 0.504 0.455 0.502 0.849 c -0.007 1.685 0.004 3.368 -0.006 5.053 c -0.004 0.685 -0.036 1.369 -0.067 2.054 c -0.028 0.607 -0.235 0.861 -0.823 1.014 c -0.312 0.082 -0.629 0.137 -0.943 0.211 c -0.069 0.016 -0.187 0.06 -0.188 0.094 c -0.013 0.297 -0.029 0.601 0.021 0.89 c 0.01 0.052 0.324 0.052 0.498 0.072 l 0.117 -0.007 c 1.212 -0.018 2.424 -0.037 3.637 -0.05 c 0.643 -0.007 1.285 -0.001 1.983 -0.001 l 0.075 -0.97 c -0.4 -0.073 -0.757 -0.128 -1.109 -0.205 c -0.549 -0.12 -0.783 -0.411 -0.797 -0.965 l -0.01 -0.793 c -0.006 -2.057 -0.014 -4.113 -0.014 -6.17 c 0 -0.299 0.124 -0.536 0.387 -0.715 c 0.557 -0.376 1.145 -0.675 1.796 -0.842 c 1.372 -0.351 2.562 0.137 3.09 1.304 c 0.167 0.368 0.298 0.775 0.335 1.175 c 0.194 2.062 0.11 4.126 -0.007 6.188 c -0.025 0.445 -0.234 0.669 -0.673 0.778 l -1.032 0.218 c -0.083 0.021 -0.204 -0.035 -0.21 0.034 c -0.023 0.285 -0.01 0.722 -0.01 0.722 h 0.246 l 3.142 0.103 c 0.861 -0.002 1.723 0.102 2.583 0.124 c 0.154 0.003 0.291 0.026 0.3 -0.152 c 0.014 -0.282 0.002 -0.547 -0.011 -0.829 l -0.164 -0.029 l -0.885 -0.199 c -0.597 -0.141 -0.803 -0.368 -0.805 -0.972 c -0.007 -1.489 0.013 -2.977 0 -4.465 c -0.007 -0.851 -0.04 -1.702 -0.095 -2.551 c -0.015 -0.226 0.02 -0.374 0.2 -0.501 c 0.53 -0.378 1.103 -0.669 1.732 -0.835 c 1.935 -0.51 3.519 0.551 3.619 2.546 c 0.098 1.924 0.057 3.855 0.042 5.783 c -0.005 0.671 -0.227 0.874 -0.888 1.054 l -0.228 0.059 c -0.677 0.162 -0.671 0.162 -0.631 0.881 c 0.013 0.225 0.075 0.283 0.315 0.277 c 1.379 -0.031 2.758 -0.039 4.137 -0.051 c 0.564 -0.005 1.128 0 1.742 0 l 0.125 -0.936 c -0.539 -0.143 -1.036 -0.249 -1.516 -0.406 c -0.424 -0.144 -0.574 -0.4 -0.572 -0.848 Z M 70.771 106.814 c 0.568 -0.527 0.572 -1.223 0.413 -1.996 c -0.45 0.471 -0.954 0.688 -1.529 0.729 c -0.771 0.055 -1.528 -0.012 -2.246 -0.319 c -1.942 -0.834 -3.854 -0.775 -5.76 0.14 c -1.603 0.768 -2.589 1.965 -2.688 3.78 c -0.063 1.163 0.155 2.264 0.931 3.189 c 0.465 0.554 1.062 0.913 1.735 1.161 c 0.29 0.107 0.312 0.245 0.069 0.43 c -0.178 0.137 -0.367 0.261 -0.557 0.38 c -0.406 0.255 -0.815 0.507 -1.226 0.754 c -0.241 0.146 -0.323 0.332 -0.244 0.617 c 0.231 0.838 0.826 1.322 1.57 1.675 l 0.271 0.189 l -0.237 0.237 c -0.729 0.591 -1.487 1.149 -2.185 1.776 c -0.586 0.527 -0.775 1.233 -0.598 2.012 c 0.357 1.555 1.388 2.517 2.851 2.959 c 2.557 0.774 4.958 0.33 7.147 -1.185 c 1.298 -0.899 2.229 -2.069 2.512 -3.679 c 0.317 -1.809 -0.688 -3.379 -2.487 -3.703 c -1.19 -0.216 -2.408 -0.278 -3.612 -0.416 c -0.562 -0.064 -1.132 -0.102 -1.679 -0.231 c -0.465 -0.11 -0.696 -0.489 -0.653 -0.859 c 0.043 -0.364 0.43 -0.703 0.873 -0.738 c 0.892 -0.072 1.766 -0.211 2.588 -0.587 c 2.178 -0.996 3.189 -2.74 2.936 -5.088 c -0.033 -0.316 -0.105 -0.628 -0.17 -0.996 c 0.697 0.117 1.41 0.294 1.975 -0.231 Z m -6.609 11.017 c 0.886 0.026 1.894 0.081 2.868 0.366 c 0.857 0.25 1.562 0.688 1.77 1.645 c 0.251 1.156 -0.305 2.306 -1.424 2.924 c -1.048 0.578 -2.186 0.626 -3.34 0.507 c -0.988 -0.102 -1.877 -0.444 -2.589 -1.174 c -0.938 -0.961 -0.943 -2.291 -0.004 -3.249 c 0.839 -0.856 1.288 -1.033 2.719 -1.019 Z m 2.217 -6.962 c -0.516 1.651 -2.018 1.879 -3.195 1.351 c -1.003 -0.449 -1.44 -1.333 -1.669 -2.342 c -0.089 -0.388 -0.11 -0.791 -0.162 -1.188 c 0.021 -0.569 0.115 -1.115 0.36 -1.627 c 0.751 -1.577 2.596 -1.483 3.617 -0.769 c 0.438 0.306 0.743 0.722 0.934 1.215 c 0.424 1.104 0.467 2.229 0.115 3.36 Z M 57.009 116.132 c -0.355 -0.057 -0.712 -0.131 -1.057 -0.236 c -0.608 -0.186 -0.682 -0.3 -0.689 -0.943 c -0.018 -1.792 -0.03 -3.584 -0.05 -5.375 c -0.01 -0.806 -0.106 -1.601 -0.353 -2.371 c -0.65 -2.03 -2.641 -3.12 -4.633 -2.521 c -1.104 0.333 -2.052 0.952 -2.935 1.679 l -0.322 0.247 l 0.001 -0.331 c 0.021 -0.381 0.062 -0.762 0.059 -1.143 c -0.002 -0.199 -0.078 -0.399 -0.115 -0.574 c -0.753 0.227 -1.428 0.455 -2.117 0.629 c -0.691 0.174 -1.396 0.292 -2.095 0.434 c -0.347 0.07 -0.602 0.28 -0.596 0.519 c 0.009 0.337 0.288 0.402 0.532 0.503 c 0.442 0.181 0.883 0.364 1.32 0.558 c 0.312 0.139 0.439 0.397 0.436 0.732 c -0.022 2.329 -0.036 4.659 -0.07 6.989 c -0.01 0.736 -0.196 0.93 -0.92 1.092 l -0.316 0.063 c -0.67 0.115 -0.689 0.142 -0.643 0.849 l 0.004 0.117 c -0.008 0.272 0.111 0.36 0.391 0.357 c 1.78 -0.021 3.561 -0.031 5.341 -0.024 c 0.763 0.003 0.845 -0.057 0.829 -0.841 l -0.036 -0.337 c -0.436 -0.073 -0.853 -0.126 -1.261 -0.216 c -0.427 -0.095 -0.58 -0.27 -0.62 -0.704 c -0.037 -0.397 -0.049 -0.8 -0.053 -1.2 c -0.02 -1.831 -0.036 -3.662 -0.045 -5.492 c -0.002 -0.461 0.083 -0.889 0.507 -1.186 c 0.643 -0.449 1.347 -0.709 2.125 -0.762 c 1.588 -0.109 2.795 0.832 2.881 2.415 c 0.106 1.953 0.074 3.913 0.099 5.87 c 0.002 0.146 -0.024 0.293 -0.044 0.438 c -0.038 0.286 -0.178 0.501 -0.468 0.575 c -0.283 0.074 -0.57 0.14 -0.859 0.184 c -0.431 0.064 -0.44 0.061 -0.473 0.496 l 0.011 0.293 c 0.051 0.506 0.052 0.491 0.564 0.486 c 1.722 -0.014 3.443 -0.023 5.164 -0.021 c 0.72 0.002 0.771 -0.032 0.777 -0.774 l -0.002 -0.176 c 0.011 -0.19 -0.074 -0.267 -0.269 -0.298 Z M 81.061 104.809 c -1.805 -0.441 -3.517 -0.113 -5.143 0.728 c -1.58 0.817 -2.636 2.08 -3.038 3.824 c -0.406 1.763 -0.212 3.483 0.567 5.12 c 0.507 1.063 1.287 1.885 2.349 2.419 c 2.486 1.252 5.527 0.684 7.477 -0.991 c 1.539 -1.321 2.104 -3.08 2.138 -5.257 c -0.021 -0.218 -0.042 -0.638 -0.1 -1.054 c -0.327 -2.37 -1.968 -4.231 -4.25 -4.789 Z m 1.367 9.155 c -0.479 1.886 -2.11 2.724 -3.95 2.076 c -0.939 -0.33 -1.641 -0.961 -2.113 -1.814 c -1.086 -1.96 -1.295 -4.044 -0.677 -6.182 c 0.412 -1.424 1.584 -2.203 2.978 -2.105 c 1.246 0.087 2.204 0.685 2.907 1.699 c 0.741 1.07 1.027 2.287 1.103 3.565 c 0.013 0.205 0.002 0.41 0.002 0.616 l 0.088 0.01 c -0.11 0.713 -0.162 1.44 -0.338 2.135 Z M 35.664 104.778 c -1.899 -0.434 -3.678 -0.005 -5.326 0.96 c -1.425 0.834 -2.346 2.08 -2.699 3.708 c -0.331 1.521 -0.196 3.016 0.343 4.473 c 0.328 0.888 0.825 1.669 1.554 2.278 c 1.535 1.281 3.329 1.605 5.238 1.248 c 1.616 -0.303 3.036 -1.021 4.068 -2.364 c 0.966 -1.256 1.334 -2.698 1.372 -4.261 c -0.057 -0.495 -0.071 -0.999 -0.176 -1.482 c -0.522 -2.411 -1.932 -4.003 -4.374 -4.56 Z m 1.549 9.18 c -0.463 1.876 -2.12 2.735 -3.947 2.087 c -1.173 -0.417 -1.937 -1.276 -2.42 -2.377 c -0.774 -1.769 -0.932 -3.61 -0.431 -5.476 c 0.384 -1.427 1.541 -2.478 3.312 -2.226 c 1.087 0.154 1.935 0.709 2.567 1.592 c 0.854 1.191 1.135 2.555 1.174 3.988 v 0.293 l 0.072 0.011 c -0.105 0.704 -0.157 1.42 -0.327 2.108 Z"
								/>
							</svg>
						</Stack>

						<Stack>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 256 326"
								preserveAspectRatio="xMinYMin meet"
								width="2em"
								height="2em"
							>
								<title>Django</title>
								<g fill="#2ba977">
									<path d="M 114.784 0 h 53.278 v 244.191 c -27.29 5.162 -47.38 7.193 -69.117 7.193 C 33.873 251.316 0 222.245 0 166.412 c 0 -53.795 35.93 -88.708 91.608 -88.708 c 8.64 0 15.222 0.68 23.176 2.717 V 0 Z m 1.867 124.427 c -6.24 -2.038 -11.382 -2.717 -17.965 -2.717 c -26.947 0 -42.512 16.437 -42.512 45.243 c 0 28.046 14.88 43.532 42.17 43.532 c 5.896 0 10.696 -0.332 18.307 -1.351 v -84.707 Z" />
									<path d="M 255.187 84.26 v 122.263 c 0 42.105 -3.154 62.353 -12.411 79.81 c -8.64 16.783 -20.022 27.366 -43.541 39.055 l -49.438 -23.297 c 23.519 -10.93 34.901 -20.588 42.17 -35.327 c 7.61 -15.072 10.01 -32.529 10.01 -78.445 V 84.261 h 53.21 Z M 196.608 0 h 53.278 v 54.135 h -53.278 V 0 Z" />
								</g>
							</svg>
						</Stack>

						<Stack>
							<svg
								height="2em"
								viewBox=".29 .22 77.26 95.75"
								width="2em"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>Flutter</title>
								<g fill="none" fill-rule="evenodd">
									<path
										d="m48.75 95.97-25.91-25.74 14.32-14.57 40.39 40.31z"
										fill="#02539a"
									/>
									<g fill="#45d1fd">
										<path
											d="m22.52 70.25 25.68-25.68h28.87l-39.95 39.95z"
											fill-opacity=".85"
										/>
										<path d="m.29 47.85 14.58 14.57 62.2-62.2h-29.02z" />
									</g>
								</g>
							</svg>
						</Stack>

						<Stack>
							<svg
								viewBox="0 0 351 369"
								width="2em"
								height="2em"
								xmlns="http://www.w3.org/2000/svg"
							>
								<defs>
									<linearGradient
										x1="23.05%"
										y1="32.622%"
										x2="61.487%"
										y2="72.798%"
										id="a"
									>
										<stop
											stop-color="#455A64"
											stop-opacity=".965"
											offset="0%"
										/>
										<stop
											stop-color="#2A253C"
											offset="100%"
										/>
									</linearGradient>
									<linearGradient
										x1="50%"
										y1="2.285%"
										x2="50%"
										y2="100%"
										id="b"
									>
										<stop
											stop-color="#FFF"
											stop-opacity="0"
											offset="0%"
										/>
										<stop
											stop-color="#FFF"
											stop-opacity=".2"
											offset="100%"
										/>
									</linearGradient>
									<path id="c" d="M0 .05h36.24v58.395H0z" />
									<path
										id="e"
										d="M.458.334h86.726V87.55H.458z"
									/>
									<path
										d="M1.4 111.988c-2.468 9.321 3.114 18.962 12.411 21.435l119.09 31.694c9.299 2.474 18.916-3.122 21.384-12.443l29.564-111.632L31.814.582l-.85-.226L1.4 111.988z"
										id="g"
									/>
								</defs>
								<g fill="none" fill-rule="evenodd">
									<g transform="translate(0 5)">
										<circle
											fill="url(#a)"
											cx="146"
											cy="218"
											r="146"
										/>
										<path
											d="M131 337.759L212.759 256"
											stroke="url(#b)"
											stroke-width="15"
											stroke-linecap="square"
											transform="rotate(-180 171.88 296.88)"
										/>
										<path
											d="M109.488 312.512l81.759-81.759"
											stroke="url(#b)"
											stroke-width="22"
											stroke-linecap="square"
											transform="rotate(-180 150.367 271.633)"
										/>
										<path
											d="M53.488 337.512l81.759-81.759"
											stroke="url(#b)"
											stroke-width="35"
											stroke-linecap="square"
											transform="rotate(-180 94.367 296.633)"
										/>
										<circle
											fill="#FFF"
											opacity=".05"
											cx="30"
											cy="195"
											r="6"
										/>
										<circle
											fill="#FFF"
											opacity=".191"
											cx="138.5"
											cy="322.5"
											r="4.5"
										/>
										<circle
											fill="#FFF"
											opacity=".405"
											cx="234.5"
											cy="294.5"
											r="4.5"
										/>
										<circle
											fill="#FFF"
											opacity=".456"
											cx="52"
											cy="275"
											r="3"
										/>
									</g>
									<path
										d="M64.9 182.883l.698 12.84c.116 2.13 1.812 4.296 3.768 4.817l6.52 1.735 21.061 5.605 6.52 1.734c1.958.521 4.505-.517 5.66-2.308l6.973-10.798-51.2-13.625z"
										fill="#757575"
									/>
									<path
										d="M86.417 205.077l10.53 2.803 6.52 1.735c1.958.52 4.504-.518 5.66-2.309l6.972-10.798-25.609-6.815"
										fill="#000"
										opacity=".2"
									/>
									<path
										fill="#F3F3F3"
										d="M64.89 182.881L87.78 79.985l60.096 15.991-31.785 100.53"
									/>
									<path
										d="M150.835 84.826l-.002.008c.002-.008-.006-.011-.006-.011l.008.003z"
										fill="#5BC348"
									/>
									<path
										d="M150.827 84.823s.008.003.006.01a9.88 9.88 0 0 0-3.256 5.094 9.923 9.923 0 0 0 .299 6.05L87.78 79.985a9.979 9.979 0 0 0 3.26-5.102 9.955 9.955 0 0 0-.302-6.04c.002-.01.012-.007.012-.007l60.077 15.987z"
										fill="#C6C6C5"
									/>
									<path
										d="M150.827 84.823L90.75 68.836c6.198-22.961 20.688-36.937 38.51-41.149 1.048-.255 2.163-.292 3.28-.156.415.052.842.128 1.269.241.418.112.826.26 1.221.421 1.027.435 1.979 1.012 2.762 1.756 13.392 12.517 19.04 31.851 13.035 54.874"
										fill="#F3F3F3"
									/>
									<path
										d="M90.75 68.836s-.01-.002-.012.007l.002-.009.01.002z"
										fill="#5BC348"
									/>
									<path
										fill="#C6C6C5"
										d="M117.828 87.98l30.048 7.996-31.786 100.53-25.6-6.813"
									/>
									<path
										d="M150.835 84.826l-.002.008c.002-.008-.006-.011-.006-.011l.008.003z"
										fill="#D3DDE2"
									/>
									<path
										d="M120.786 76.839l.001-.01 30.04 7.994s.008.003.005.011a9.891 9.891 0 0 0-3.256 5.094 9.92 9.92 0 0 0 .3 6.048l-30.048-7.996"
										fill="#000"
										opacity=".2"
									/>
									<path
										d="M133.808 27.772c.418.112.827.258 1.222.422 1.027.435 1.979 1.011 2.763 1.754 13.39 12.518 19.04 31.852 13.033 54.875l-30.04-7.994"
										fill="#C6C6C5"
									/>
									<path
										d="M94.431 193.663c-.014.039-.027.08-.042.118-.015.04-.027.08-.043.118a4.979 4.979 0 0 1-5.964 3.133 4.987 4.987 0 0 1-3.623-5.69c.006-.04.014-.081.022-.123.006-.041.015-.082.022-.123L98.11 117.16c.06-.39.14-.781.245-1.172 1.603-6.042 7.795-9.64 13.831-8.033 6.035 1.606 9.626 7.806 8.023 13.849-.104.393-.23.773-.37 1.144L94.43 193.663z"
										fill="#1967D2"
									/>
									<path
										d="M112.336 107.995c6.035 1.606 9.627 7.806 8.023 13.85-.104.392-.23.772-.37 1.143l-25.407 70.715c-.015.04-.027.08-.043.118-.014.04-.027.08-.042.118a4.98 4.98 0 0 1-5.964 3.133"
										fill="#000"
										opacity=".2"
									/>
									<g transform="translate(62 210.118)">
										{/* <mask id="d" fill="#fff">
											<use xlink:href="#c" />
										</mask> */}
										<path
											d="M22.81.908C-7.144-7.062-1.73 42.712 6.335 57.373l-.002-.013a1.865 1.865 0 0 0 2.777.739l-.008.01C22.735 49.78 54.098 9.235 22.81.91"
											fill="#E37400"
											mask="url(#d)"
										/>
									</g>
									<path
										d="M84.177 213.718c-19.065-5.073-14.705 23.166-9.336 31.604l-.002-.006c.337.611 1.173.833 1.768.47l-.004.006c8.45-4.45 27.488-26.775 7.574-32.074"
										fill="#FBBC04"
									/>
									<path
										d="M345.356 138.888c6.811-6.87 6.771-17.947-.09-24.767-6.862-6.82-17.924-6.78-24.735.09l-55.508 55.985c-6.811 6.87-6.77 17.947.09 24.768 6.861 6.82 17.924 6.78 24.735-.09l55.508-55.986z"
										fill="#78C257"
									/>
									<g transform="translate(177.048 194.451)">
										{/* <mask id="f" fill="#fff">
											<use xlink:href="#e" />
										</mask> */}
										<path
											d="M82.102 30.19c6.81-6.87 6.77-17.947-.09-24.767-6.862-6.82-17.924-6.78-24.736.09L5.541 57.693c-6.811 6.87-6.772 17.947.09 24.767 6.861 6.82 17.923 6.78 24.735-.09l51.736-52.18z"
											fill="#78C257"
											mask="url(#f)"
										/>
									</g>
									<path
										d="M202.088 217.059c6.681-6.739 6.81-17.438.286-23.923-6.524-6.485-17.209-6.28-23.89.46l-50.749 51.184c-6.68 6.74-6.809 17.438-.284 23.923 6.524 6.485 17.208 6.28 23.89-.46l50.747-51.184z"
										fill="#78C257"
									/>
									<path
										fill="#FFF"
										d="M158.09 77.65l-4.523 15.941 154.288 35.606 2.851-11.096z"
									/>
									<path
										d="M156.413 86.287l-.85-.225-29.577 111.553c-2.47 9.314 3.115 18.947 12.417 21.42l119.14 31.67c9.302 2.473 18.922-3.119 21.393-12.433l29.576-111.553-152.1-40.432zM157.366 80.122l152.65 40.578 2.166-8.166c.365-2.406.623-4.75.753-7.129 1.05-20.936-8.289-41.447-24.692-56.232l17.397-18.458a2.874 2.874 0 0 0-.112-4.037 2.865 2.865 0 0 0-4.03.113l-17.593 18.678c-8.916-7.013-19.53-12.43-31.422-15.591-11.977-3.184-23.973-3.732-35.243-2.039l-6.043-25.052c-.373-1.51-1.935-2.472-3.444-2.099-1.51.372-2.47 1.94-2.097 3.449l5.973 24.806c-20.544 4.6-38.107 16.822-47.825 34.27a63.328 63.328 0 0 0-5.872 14.601 44.015 44.015 0 0 0-.578 2.35l.012-.042z"
										fill="#78C257"
									/>
									<path
										d="M281.349 68.738c3.95 1.05 6.32 5.14 5.272 9.096-1.049 3.954-5.134 6.328-9.084 5.279-3.95-1.05-6.32-5.14-5.273-9.095 1.05-3.956 5.134-6.33 9.085-5.28M210.188 49.802c3.95 1.05 6.322 5.14 5.272 9.095-1.049 3.956-5.134 6.33-9.083 5.28-3.95-1.05-6.322-5.14-5.273-9.095 1.05-3.955 5.134-6.33 9.084-5.28"
										fill="#FFF"
									/>
									<path
										fill="#000"
										opacity=".1"
										d="M284.448 217.504l-148.322-39.469 4.888-18.413 148.32 39.469z"
									/>
									<path
										fill="#F3F3F3"
										d="M291.21 214.535l-153.901-40.953 4.887-18.412 153.9 40.953z"
									/>
									<g transform="translate(125 86)">
										{/* <mask id="h" fill="#fff">
											<use xlink:href="#g" />
										</mask> */}
										<path
											d="M44.288 59.037l-29.845 48.94c-14.555 18.227-32.755-8.632-32.755-8.632l35.411-47.474 27.19 7.166z"
											fill="#000"
											opacity=".1"
											mask="url(#h)"
										/>
									</g>
									<path
										d="M184.946 128.849c6.773-6.869 6.734-17.943-.09-24.762a17.303 17.303 0 0 0-24.598.09l-55.203 55.974c-6.775 6.868-6.734 17.942.088 24.761a17.304 17.304 0 0 0 24.6-.09l55.203-55.973z"
										fill="#78C257"
									/>
								</g>
							</svg>
							{/* <svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 128 128"
								width="2em"
								height="2em"
							>
								<title>Android</title>
								<path
									fill="#fff"
									d="M21.012 91.125c-5.538.003-10.038-4.503-10.039-10.04l-.002-30.739c-.002-5.532 4.497-10.037 10.028-10.038 2.689-.002 5.207 1.041 7.105 2.937s2.942 4.418 2.944 7.099l-.003 30.74c.007 2.679-1.034 5.199-2.931 7.094-1.892 1.9-4.417 2.946-7.102 2.947M21.004 43.005c-4.053-.002-7.338 3.291-7.339 7.341l.005 30.736c.001 4.064 3.292 7.344 7.341 7.348 4.057-.005 7.343-3.285 7.339-7.347v-30.741c-.002-4.049-3.291-7.339-7.346-7.337"
								/>
								<path
									fill="#fff"
									d="M99.742 44.527l-2.698-.001-66.119.009-2.699.001-.002-2.699c-.006-11.08 6.03-21.385 15.917-27.473l-3.844-7.017c-.47-.822-.588-1.863-.314-2.815.278-.952.935-1.771 1.814-2.239.509-.288 1.131-.448 1.759-.447 1.362 0 2.609.739 3.267 1.933l4.023 7.329c4.163-1.527 8.558-2.306 13.099-2.305 4.606-.002 9.023.777 13.204 2.311l4.017-7.341c.647-1.191 1.903-1.933 3.263-1.932.612-.001 1.223.148 1.761.438.903.495 1.533 1.286 1.81 2.245.276.953.165 1.959-.318 2.832l-3.842 7.013c9.871 6.101 15.9 16.398 15.899 27.459l.003 2.699zM80.196 15.403l5.123-9.355c.273-.489.095-1.115-.399-1.386-.501-.271-1.119-.086-1.384.405l-5.176 9.45c-4.354-1.934-9.229-3.021-14.382-3.016-5.142-.005-10.008 1.078-14.349 3.005l-5.181-9.429c-.267-.497-.891-.679-1.379-.405-.497.266-.68.891-.403 1.379l5.125 9.348c-10.07 5.194-16.874 15.084-16.868 26.439l66.118-.008c.003-11.351-6.789-21.221-16.845-26.427m-31.256 14.457c-1.521-.003-2.763-1.241-2.763-2.771 0-1.523 1.24-2.774 2.766-2.774 1.533-.001 2.773 1.251 2.775 2.774.001 1.528-1.242 2.77-2.778 2.771m30.107-.006c-1.528.002-2.775-1.235-2.772-2.771 0-1.521 1.242-2.772 2.773-2.778 1.521.005 2.768 1.258 2.767 2.779 0 1.531-1.241 2.771-2.768 2.77M51.711 126.159c-5.533-.001-10.036-4.501-10.037-10.038l-.002-13.567-2.638.003c-2.817.001-5.461-1.094-7.448-3.082-1.99-1.986-3.087-4.633-3.083-7.452l-.01-47.627v-2.701h2.699l65.623-.01 2.7-.002v2.699l.007 47.633c.001 5.809-4.725 10.536-10.532 10.535l-2.654.002.003 13.562c0 5.534-4.502 10.039-10.033 10.039-2.681.006-5.197-1.036-7.098-2.937-1.901-1.896-2.948-4.416-2.947-7.096v-13.568h-4.511v13.565c-.002 5.535-4.503 10.043-10.039 10.042"
								/>
								<path
									fill="#fff"
									d="M31.205 92.022c-.004 4.337 3.497 7.838 7.831 7.837h5.333l.006 16.264c-.001 4.05 3.289 7.341 7.335 7.342 4.056 0 7.342-3.295 7.338-7.348l.001-16.259 9.909-.003-.001 16.263c.004 4.051 3.298 7.346 7.343 7.338 4.056.003 7.344-3.292 7.343-7.344l-.005-16.259 5.353-.001c4.319.001 7.832-3.508 7.832-7.837l-.009-47.635-65.621.012.012 47.63zM106.996 91.112c-5.536.001-10.039-4.498-10.038-10.036l-.008-30.738c.002-5.537 4.498-10.041 10.031-10.041 5.54-.001 10.046 4.502 10.045 10.038l.003 30.736c.001 5.534-4.498 10.042-10.033 10.041M106.986 42.996c-4.053-.004-7.337 3.287-7.337 7.342l.003 30.737c.002 4.059 3.286 7.343 7.342 7.34 4.054-.001 7.335-3.281 7.338-7.343l-.008-30.736c-.001-4.056-3.283-7.342-7.338-7.34"
								/>
								<path
									fill="#A4C439"
									d="M21.004 43.005c-4.053-.002-7.338 3.291-7.339 7.341l.005 30.736c.001 4.064 3.288 7.344 7.342 7.343 4.056 0 7.342-3.28 7.338-7.342v-30.741c-.002-4.049-3.291-7.339-7.346-7.337m59.192-27.602l5.123-9.355c.273-.489.094-1.111-.401-1.388-.5-.265-1.117-.085-1.382.407l-5.175 9.453c-4.354-1.938-9.227-3.024-14.383-3.019-5.142-.005-10.013 1.078-14.349 3.005l-5.181-9.429c-.269-.497-.889-.677-1.378-.406-.498.269-.681.892-.404 1.38l5.125 9.349c-10.07 5.193-16.874 15.083-16.868 26.438l66.118-.008c.003-11.351-6.789-21.221-16.845-26.427m-31.256 14.457c-1.521-.003-2.763-1.241-2.763-2.771 0-1.523 1.238-2.775 2.766-2.774 1.533-.001 2.773 1.251 2.775 2.774.001 1.528-1.242 2.77-2.778 2.771m30.107-.006c-1.528.002-2.772-1.237-2.772-2.771.006-1.52 1.242-2.772 2.773-2.778 1.521.005 2.768 1.258 2.767 2.779.002 1.531-1.241 2.771-2.768 2.77m-47.854 14.538l.011 47.635c-.003 4.333 3.502 7.831 7.832 7.831l5.333.002.006 16.264c-.001 4.05 3.291 7.342 7.335 7.342 4.056 0 7.342-3.295 7.343-7.347l-.004-16.26 9.909-.003.004 16.263c0 4.047 3.293 7.346 7.338 7.338 4.056.003 7.344-3.292 7.343-7.344l-.005-16.259 5.352-.004c4.32.002 7.834-3.5 7.836-7.834l-.009-47.635-65.624.011zm83.134 5.943c-.001-4.055-3.286-7.341-7.341-7.339-4.053-.004-7.337 3.287-7.337 7.342l.006 30.738c-.001 4.058 3.283 7.338 7.339 7.339 4.054-.001 7.337-3.281 7.338-7.343l-.005-30.737z"
								/>
							</svg> */}
						</Stack>
					</Slider>
					{/* </marquee> */}
				</div>
			</div>
		</div>
	);
};

export default About;