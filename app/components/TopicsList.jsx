import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from 'react-icons/hi'
const getTopics = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/topics', {
            cache: 'no-store',
        });
        if (!res.ok) {
            throw new Error('failed to fetch')
        }
        return res.json();
    } catch (error) {
        console.log('failed to fetch', error);
    }
}

const TopicsList = async () => {
    const topics = await getTopics();
    return (
        <>
            {
                topics?.topics?.map(t =>
                    <div key={t?._id} className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
                        <div>
                            <h2 className="font-bold text-2xl">{t?.title}</h2>
                            <div>{t?.description}</div>
                        </div>
                        <div className="flex gap-2">
                            <RemoveBtn />
                            <Link href={'/editTopic/123'}> <HiPencilAlt /> </Link>
                        </div>
                    </div>
                )
            }


        </>
    );
};

export default TopicsList;