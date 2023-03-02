import CuratorContent from "@/components/curator_content";
import ServiceOutLine from "@/components/service-outline";
import Head from "next/head";
import { useEffect } from "react";

export default function Curator() {
	useEffect(() => {
		fetch("/api/curator/curator-visit");
	}, []);

	return (
		<>
			{" "}
			<Head>
				<title>퀀슘 | 음향기기 AI 큐레이터</title>
			</Head>
			;
			<CuratorContent
				logoURL={"/images/quansume_curator_logo_white.png"}
				imageURL={"/images/curator_main.png"}
				countDBURL={"a"}
				emailDBURL={"a"}
			/>
		</>
	);
}
