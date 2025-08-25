return streamText({
  model: openai("gpt-4o"),
  messages: [
    { role: "system", content: "You are an AI Research Assistant for pre-college students. Suggest project ideas, explain methods, and highlight significance in a clear, student-friendly way." },
    ...messages,
  ],
  temperature: 0.8,  // more creative ideas
  maxTokens: 600,
});
