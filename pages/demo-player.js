import DemoPlayerContent from "@/components/demo-player-content";
import ServiceOutLine from "@/components/service-outline";
import Head from "next/head";
import { useEffect } from "react";

export default function DemoPlayer() {
	useEffect(() => {
		fetch("/api/demo-player/demoplayer-visit");
	}, []);

	return (
		<>
			<Head>
				<title>퀀슘 | 데모플레이어</title>
			</Head>
			<DemoPlayerContent
				logoURL={"/images/quansume_demoplayer_logo_white.png"}
				imageURL={"/images/curator_main.png"}
				countDBURL={"a"}
				emailDBURL={"a"}
			/>
		</>
	);
}
