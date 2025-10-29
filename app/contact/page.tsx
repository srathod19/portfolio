export default function Contact() {
return (
<section>
<h2 className="text-3xl font-semibold mb-4">Contact</h2>
<p className="mb-4">Email: <a href="mailto:your.email@example.com" className="text-blue-600">your.email@example.com</a></p>
<form className="max-w-xl grid gap-3">
<input className="border p-2 rounded" placeholder="Name" />
<input className="border p-2 rounded" placeholder="Email" />
<textarea className="border p-2 rounded" placeholder="Message" rows={6}></textarea>
<button className="px-4 py-2 rounded bg-black text-white">Send</button>
</form>
</section>
)
}