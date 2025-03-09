import { saveEmail } from '@/utils/firebase';

export default function EmailForm() {
  const [email, setEmail] = useState('');

  return (
    <div className="p-4 bg-white/10 rounded-lg">
      <input 
        type="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-2 text-black"
        placeholder="Tu email"
      />
      <button 
        onClick={() => saveEmail(email)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Suscribirse
      </button>
    </div>
  );
}
