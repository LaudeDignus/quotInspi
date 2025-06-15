export function speak(text,lang="en-US",rate=1,pitch=0.6){
    if (!window.SpeechSynthesis) return
    window.speechSynthesis.cancel()
    const utterance=new SpeechSynthesisUtterance(text)
    utterance.lang=lang
    utterance.rate=rate
    utterance.pitch=pitch
    window.speechSynthesis.speak(utterance)
}