import Topic from "@/models/topic";
import connectMongoDB from "@/utils/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { title, description } = await request.json();
    await connectMongoDB();
    await Topic.create({ title, description });
    return NextResponse.json({ message: 'topic create' }, { status: 200 })
}

export async function GET() {
    try {
        await connectMongoDB();
        const topics = await Topic.find();
        return NextResponse.json({ topics });
    } catch (error) {
        console.log(error);
    }
}


export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get('id');
    await connectMongoDB();
    await Topic.findByIdAndDelete(id)
    return NextResponse.json({ message: 'topic delete success' }, { status: 200 });
}
