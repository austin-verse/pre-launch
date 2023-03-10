import Image from "next/image";
import styles from "./service-outline.module.css";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
export default function DemoPlayerContent({ logoURL, imageURL }) {
	const [isButtonClicked, setIsButtonClicked] = useState(false);
	const [isSubmitButtonClicked, setIsSubmitButtonClicked] = useState(false);
	const [isEmailRegexPassed, setIsEmailRegexPassed] = useState(0);
	const [isFeedbackSubmitButtonClicked, setIsFeedbackSubmitButtonClicked] =
		useState(false);
	const [isFeedbackRegexPassed, setIsFeedbackRegexPassed] = useState(0);
	const demoPlayerFeedbackRef = useRef();

	const demoPlayerEmailRef = useRef();
	const buttonClickHandler = () => {
		setIsButtonClicked(true);
		fetch("/api/demo-player/click-try", {
			method: "POST",
			body: JSON.stringify({ message: "demo-player try button clicked" }),
			headers: {
				"Content-Type": "application/json",
			},
		});
	};

	const submitButtonClickHandler = () => {
		let emailRegex =
			/([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		const email = demoPlayerEmailRef.current.value;
		const emailTest = emailRegex.test(email);
		if (emailTest == true) {
			setIsSubmitButtonClicked(true);
			fetch("/api/demo-player/enter-email", {
				method: "POST",
				body: JSON.stringify({
					message: "demo-player try button clicked",
					email: email,
				}),
				headers: {
					"Content-Type": "application/json",
				},
			});
		} else {
			setIsEmailRegexPassed(1);
		}
	};
	const feedbackSubmitButtonClickHandler = () => {
		const feedback = demoPlayerFeedbackRef.current.value;
		if (feedback.length > 0) {
			setIsFeedbackSubmitButtonClicked(true);
			fetch("/api/demo-player/enter-feedback", {
				method: "POST",
				body: JSON.stringify({
					message: "demo-player feedback",
					feedback: feedback,
				}),
				headers: {
					"Content-Type": "application/json",
				},
			});
		} else {
			setIsFeedbackRegexPassed(1);
		}
	};

	// product name swap
	return (
		<div className={styles.outer}>
			<div className={styles.inner}>
				<div className={styles.logo_image}>
					<Image src={logoURL} alt="logo" width={172} height={42} />
				</div>
				<div className={styles.main_image}>
					<Image
						src={imageURL}
						alt="logo"
						width={414.37}
						height={260}
						className={styles.main_image_png}
					/>
				</div>
				<p className={styles.title}>
					?????????
					<span className={styles.color_green}>
						<span> ????????? ?? ????????? ?? ?????????</span>
					</span>
					???<span className={styles.color_green}> ?????????</span>?????? ??????
					<span className={styles.color_green}> ??????????????? ??????</span>??? ???
					????????? ????????? ????????????????
				</p>
				<p className={styles.desc}>
					<span className={styles.weight_bold}>
						??????, ??????????????????, ????????????
					</span>
					<span> </span>??? ???????????? ????????? ?????? ????????????
					<span className={styles.weight_bold}> ??????????????? ??????</span>??????
					<span className={styles.weight_bold}> ?????????</span>?????? ????????????
					<span className={styles.weight_bold}> ??????????????? ??????</span>?????????. ???
					????????? ????????? ???????????????!
				</p>
				{/* ??????????????? ?????? */}
				{!isButtonClicked ? (
					<button
						className={styles.button}
						onClick={() => {
							buttonClickHandler();
						}}
					>
						<p className={styles.button_text}>??????????????????!</p>
					</button>
				) : null}
				{/* ????????? ??? */}
				{isButtonClicked && !isSubmitButtonClicked ? (
					<div className={styles.email_outer}>
						<p className={styles.emailLabel}>
							?????? ?????????????????? ?????? ??? ???????????? ????????? ?????? ?????????
							<br className={styles.br} />
							<span> ????????? ?????? ??? ?????? ????????? ??????????????????.</span>
						</p>
						<form className={styles.form}>
							<input
								required
								className={styles.input}
								placeholder="???????????? ??????????????????."
								type="email"
								ref={demoPlayerEmailRef}
							/>
							<button
								className={styles.submit_button}
								type="button"
								onClick={() => {
									submitButtonClickHandler();
								}}
							>
								<p>??????</p>
							</button>
						</form>
						<p
							className={
								isEmailRegexPassed === 1
									? styles.email_validation_message
									: styles.email_validation_message_hide
							}
						>
							???????????? ????????? ??????????????????.
						</p>
					</div>
				) : null}{" "}
				{isButtonClicked == true && isSubmitButtonClicked == true ? (
					<div className={styles.submit_finished_outer}>
						<div className={styles.done_image}>
							<Image
								src={"/images/done.png"}
								alt="done"
								width={60}
								height={60}
							/>
						</div>
						<p className={styles.alert_done_title}>?????? ????????? ??????????????????!</p>
					</div>
				) : null}{" "}
				{!isFeedbackSubmitButtonClicked ? (
					<div className={styles.email_outer}>
						<p className={styles.emailLabel}>
							?????? ???????????? ?????? ????????? ???????????????.
							<br className={styles.br} />
						</p>
						<form className={styles.form}>
							<input
								required
								className={styles.input}
								placeholder="???????????? ??????????????????."
								type="email"
								ref={demoPlayerFeedbackRef}
							/>
							<button
								className={styles.submit_button}
								type="button"
								onClick={() => {
									feedbackSubmitButtonClickHandler();
								}}
							>
								<p>??????</p>
							</button>
						</form>
						<p
							className={
								isFeedbackRegexPassed === 1
									? styles.email_validation_message
									: styles.email_validation_message_hide
							}
						>
							???????????? ??????????????????.
						</p>
					</div>
				) : (
					<div className={styles.submit_finished_outer}>
						<div className={styles.done_image}>
							<Image
								src={"/images/done.png"}
								alt="done"
								width={60}
								height={60}
							/>
						</div>
						<p className={styles.alert_done_title}>???????????? ?????????????????????.</p>
					</div>
				)}
			</div>
		</div>
	);
}
