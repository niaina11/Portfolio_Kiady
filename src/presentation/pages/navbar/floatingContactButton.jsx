import { useState } from "react";
import { Facebook, MessageCircle } from "lucide-react";

export default function FloatingContactButton() {
  const [showContacts, setShowContacts] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end space-y-2 z-50">
      {showContacts && (
        <div className="flex flex-col space-y-2 bg-white p-2 shadow-lg rounded-lg animate-fadeIn">
          <a href="https://web.facebook.com/kiady.nellio" target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
            <Facebook size={24} />
          </a>
          <a href="https://wa.me/261341647584?text=Bonjour,%20je%20souhaite%20discuter%20avec%20vous." target="_blank" rel="noopener noreferrer" className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600">
            <MessageCircle size={24} />
          </a>
        </div>
      )}
      <button onClick={() => setShowContacts(!showContacts)} className="p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600">
        📞
      </button>
    </div>
  );
}
