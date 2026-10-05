import ollama

def generate_ai_feedback(resume_text):

    prompt = f"""
    Analyze this resume and provide:

    1. ATS Improvements
    2. Missing Skills
    3. Career Suggestions
    4. Interview Tips

    Resume:
    {resume_text}
    """

    response = ollama.chat(
        model="phi3",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    return response["message"]["content"]