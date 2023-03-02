import Image from "next/image";
import styles from "./service-outline.module.css";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
export default function CuratorContent({ logoURL, imageURL }) {
	const [isButtonClicked, setIsButtonClicked] = useState(false);
	const [isSubmitButtonClicked, setIsSubmitButtonClicked] = useState(false);
	const [isEmailRegexPassed, setIsEmailRegexPassed] = useState(0);
	const curatorEmailRef = useRef();
	const buttonClickHandler = () => {
		setIsButtonClicked(true);
		fetch("/api/curator/click-try", {
			method: "POST",
			body: JSON.stringify({ message: "curator try button clicked" }),
			headers: {
				"Content-Type": "application/json",
			},
		});
	};

	const submitButtonClickHandler = () => {
		let emailRegex =
			/([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		const email = curatorEmailRef.current.value;
		const emailTest = emailRegex.test(email);
		if (emailTest == true) {
			setIsSubmitButtonClicked(true);
			fetch("/api/curator/enter-email", {
				method: "POST",
				body: JSON.stringify({
					message: "curator try button clicked",
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
	const betaTestClickHandler = () => {
		fetch("/api/curator/click-beta-test", {
			method: "POST",
			body: JSON.stringify({ message: "curator beta test button clicked" }),
			headers: {
				"Content-Type": "application/json",
			},
		});
	};

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
					<span className={styles.color_green}>자주 듣는 음악</span>을 통해
					나에게 어울리는
					<span className={styles.color_green}>
						<span> 이어폰 · 헤드폰 · 스피커</span>
					</span>
					를<span className={styles.color_green}> 추천</span>받을 수 있다면
					얼마나 편리할까요?
				</p>
				<p className={styles.desc}>
					<span className={styles.weight_bold}>헤드폰</span>을 사고 싶은데
					검색만 하다 아직 뭘 살지 결정하지 못하셨나요? 혹은 이미 샀는데 취향에
					맞지 않아
					<span className={styles.weight_bold}> 후회한 경험이 있나요?</span>
					<br />
					<span className={styles.weight_bold}>좋아하는 음악</span>을
					알려주시면, <span className={styles.weight_bold}>퀀슘 AI</span>가 나의
					<span className={styles.weight_bold}>음향 성향</span>과 어울리는
					<span className={styles.weight_bold}> 헤드폰을 추천</span>
					해줄거에요!
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
							퀀슘 큐레이터 정식 출시 전 이메일로 알림을 받고 싶다면
							<br className={styles.br} />
							<span> 이메일 입력 후 신청 버튼을 클릭해주세요.</span>
						</p>
						<form className={styles.form}>
							<input
								required
								className={styles.input}
								placeholder="이메일을 입력해주세요."
								type="email"
								ref={curatorEmailRef}
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
				) : null}{" "}
				{isButtonClicked ? (
					<Link
						href={"https://beta.quansume.com"}
						passHref
						target="_blank"
						style={{
							marginTop: "4rem",
							textDecoration: "none",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
						onClick={betaTestClickHandler}
					>
						<p className={styles.beta_test_button_text}>
							큐레이터 베타서비스 체험하기
						</p>
						<Image
							src={"/images/to_right.png"}
							alt="to_right"
							width={22}
							height={22}
							className={styles.to_right_png}
						/>
					</Link>
				) : null}
			</div>
		</div>
	);
}
