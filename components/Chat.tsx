'use client'
import { useChat } from "ai/react"
import { useState, useEffect } from "react"

const Chat = ( { onChangePromptText, onClearPromptText } : any ) => {
  const { input, handleInputChange, handleSubmit, isLoading, messages } = useChat();
  const [promptText, setPromptText] = useState("");

  useEffect(() => {
    // Get the latest assistant response from messages
    const lastAssistantResponse = messages
      .filter((message) => message.role === "assistant")
      .pop();

    if (lastAssistantResponse) {
      // Set the latest assistant response as the prompt text
      setPromptText(lastAssistantResponse.content);
      onChangePromptText(lastAssistantResponse.content);
    }
  }, [messages]);

  const handleClearPrompt = () => {
    setPromptText("");
    onChangePromptText("");
    onClearPromptText();
  };

  return (
    <div className="lg:w-2/3 w-full h-full flex gap-1">
      <div className="w-full h-full">
        <form className="flex flex-col gap-2 w-full h-full items-center justify-center" onSubmit={handleSubmit}>
          <textarea
            className="w-full h-40 text-center p-1"
            placeholder="Primjer teksta: 'Napiši mi žalbu zbog kazne za parkiranje'. Dodajte što više objašnjenja i na kraju prepravite tekst po vašoj volji zbog boljih rezultata"
            value={input}
            onChange={handleInputChange}
          />
          <div className="flex flex-col lg:flex-row gap-1 w-full h-1/4 justify-center items-center">
          <button
          className="lg:w-full w-1/2 h-full text-white bg-orange_law font-bold rounded-md"
            >
              Unesi zahtjev
            </button>
          <button
          className="lg:w-full w-1/2 h-full text-white bg-orange_law font-bold rounded-md"
          type="button"
          onClick={handleClearPrompt}
            >
             Očisti zahtjev
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chat;



