import React from 'react';
import { Router, useRouter } from 'next/router';

const Gummydetail = () => {
	const router = useRouter();

	console.log(router.query.gummyID);
	return <div> Hello from gumy detail pag{router.query.gummyID}</div>;
};

export default Gummydetail;
