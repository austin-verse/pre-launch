import Image from "next/image";
import styles from "./service-outline.module.css";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
export default function DemoPlayerContent({ logoURL, imageURL }) {
	const [isButtonClicked, setIsButtonClicked] = useState(false);
	const [isSubmitButtonClicked, setIsSubmitButtonClicked] = useState(false);
	const [isEmailRegexPassed, setIsEmailRegexPassed] = useState(0);
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
					다양한
					<span className={styles.color_green}>
						<span> 이어폰 · 헤드폰 · 스피커</span>
					</span>
					를<span className={styles.color_green}> 온라인</span>으로 미리
					<span className={styles.color_green}> 체험해보고 구매</span>할 수
					있다면 얼마나 편리할까요?
				</p>

				<p className={styles.desc}>
					<span className={styles.weight_bold}>
						음향, 노이즈캔슬링, 통화품질
					</span>
					<span> </span>등 구매하기 전에는 알기 어려웠던
					<span className={styles.weight_bold}> 음향기기의 특성</span>들을
					<span className={styles.weight_bold}> 온라인</span>으로 편리하게
					<span className={styles.weight_bold}> 체험해보고 구매</span>하세요. 곧
					여러분 앞으로 다가갑니다!
				</p>

				{/* 관심있어요 버튼 */}
				{!isButtonClicked ? (
					<button
						className={styles.button}
						onClick={() => {
							buttonClickHandler();
						}}
					>
						<p className={styles.button_text}>사용해볼래요!</p>
					</button>
				) : null}

				{/* 이메일 폼 */}
				{isButtonClicked && !isSubmitButtonClicked ? (
					<div className={styles.email_outer}>
						<p className={styles.emailLabel}>
							퀀슘 데모플레이어 출시 전 이메일로 알림을 받고 싶다면
							<br className={styles.br} />
							<span> 이메일 입력 후 신청 버튼을 클릭해주세요.</span>
						</p>
						<form className={styles.form}>
							<input
								required
								className={styles.input}
								placeholder="이메일을 입력해주세요."
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
								<p>신청</p>
							</button>
						</form>
						<p
							className={
								isEmailRegexPassed === 1
									? styles.email_validation_message
									: styles.email_validation_message_hide
							}
						>
							이메일을 정확히 입력해주세요.
						</p>
					</div>
				) : null}
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
						<p className={styles.alert_done_title}>알림 신청이 완료되었어요!</p>
					</div>
				) : null}
			</div>
		</div>
	);
}
