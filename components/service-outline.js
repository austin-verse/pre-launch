import Image from "next/image";
import styles from "./service-outline.module.css";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
export default function ServiceOutLine({
	logoURL,
	imageURL,
	title,
	desc,
	countDBURL,
	emailDBURL,
}) {
	const router = useRouter();
	const currentPath = router.asPath;
	const [isButtonClicked, setIsButtonClicked] = useState(false);
	const [isSubmitButtonClicked, setIsSubmitButtonClicked] = useState(false);
	const curatorEmailRef = useRef();
	const demoplayerEmailRef = useRef();
	const buttonClickHandler = () => {
		if (currentPath == "/curator") {
			console.log("curator interest!!!!");
		} else if (currentPath == "/demo-player") {
			console.log("demo player interest!!!!");
		} else {
			console.log("wtf");
			console.log(currentPath);
		}
	};

	const submitButtonClickHandler = () => {
		if (currentPath == "/curator") {
			console.log("curator email submitted");
			setIsSubmitButtonClicked(true);
		} else if (currentPath == "/demo-player") {
			console.log("demo player email submitted");
			setIsSubmitButtonClicked(true);
		} else {
			console.log("wtf");
			console.log(currentPath);
		}
	};
	return (
		<div className={styles.outer}>
			<div className={styles.inner}>
				<div className={styles.logo_image}>
					<Image src={logoURL} alt="logo" width={172} height={42} />
				</div>
				<div className={styles.main_image}>
					<Image src={imageURL} alt="logo" width={414.37} height={260} />
				</div>
				{currentPath == "/curator" ? (
					<p className={styles.title}>
						좋아하는 <span>음악으로</span> 나에게 어울리는
						<span className={styles.color_green}>헤드폰</span>을
						<br />
						<span className={styles.color_green}>추천</span>받을 수 있다면
						얼마나 편리할까요?
						<br />
						들어보고 구매하고 싶다면?
					</p>
				) : (
					<p className={styles.title}>
						다양한 <span className={styles.color_green}>헤드폰</span>을
						<span className={styles.color_green}>온라인</span>으로 미리
						<br />
						<span className={styles.color_purple}>체험해보고 구매</span>할 수
						있다면 얼마나 편리할까요?
					</p>
				)}
				{currentPath == "/curator" ? (
					<p className={styles.desc}>
						이젠 한 곳에서 온라인으로 여러 기기들을 들어보고 구매하세요.
						<br /> 2022년 5월, 음향기기 구매에 새로운 방법을 제시할 퀀슘이
						출시됩니다.
					</p>
				) : (
					<p className={styles.desc}>
						<span className={styles.weight_bold}>
							음향, 노이즈캔슬링, 통화품질
						</span>
						등 구매하기 전에는 알기 어려웠던
						<span className={styles.weight_bold}> 음향기기의 특성</span>들을
						<br />
						<span className={styles.weight_bold}>온라인</span>으로 편리하게
						<span className={styles.weight_bold}> 체험해보고 구매</span>하세요.
						곧 여러분 앞으로 다가갑니다!
					</p>
				)}
				{!isButtonClicked ? (
					<button
						className={styles.button}
						onClick={() => {
							buttonClickHandler();
							setIsButtonClicked(true);
						}}
					>
						<p className={styles.button_text}>관심있어요!</p>
					</button>
				) : null}
				{currentPath == "/curator" && isButtonClicked ? (
					<div className={styles.email_outer}>
						<p className={styles.emailLabel}>
							퀀슘 큐레이터 출시 전 이메일로 알림을 받고 싶다면 이메일 입력 후
							신청 버튼을 클릭해주세요.
						</p>
						<form className={styles.form}>
							<input
								required
								className={styles.input}
								placeholder="큐레이터이메일을 입력해주세요."
								type="email"
								ref={curatorEmailRef}
							/>
							<button className={styles.submit_button} type="submit">
								<p>신청</p>
							</button>
						</form>
					</div>
				) : null}
				{currentPath == "/demo-player" && isButtonClicked ? (
					<div className={styles.email_outer}>
						<p className={styles.emailLabel}>
							퀀슘 데모플레이어 출시 알림을 받고 싶다면 이메일 입력 후 신청
							버튼을 클릭해주세요.
						</p>
						<form className={styles.form}>
							<input
								required
								className={styles.input}
								placeholder="데모이메일을 입력해주세요."
								type="email"
								ref={demoplayerEmailRef}
							/>
							<button
								className={styles.submit_button}
								type="button"
								onClick={submitButtonClickHandler}
							>
								<p>신청</p>
							</button>
						</form>
					</div>
				) : null}
				{isSubmitButtonClicked == true ? (
					<div>
						<p>알림 신청이 완료되었어요!</p>
						<p>빠른 시일 내에 찾아 뵙도록 하겠습니다.</p>
					</div>
				) : (
					<div></div>
				)}
			</div>
		</div>
	);
}
