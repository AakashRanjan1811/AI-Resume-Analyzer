import nltk

from nltk.corpus import stopwords

from utils.text_cleaner import (
    clean_basic_text
)

nltk.download("stopwords")

stop_words = set(
    stopwords.words("english")
)

def clean_text(text):

    # BASIC CLEANING
    text = clean_basic_text(text)

    # TOKENIZE
    words = text.split()

    # REMOVE STOPWORDS
    words = [

        word

        for word in words

        if word not in stop_words
    ]

    # JOIN AGAIN
    text = " ".join(words)

    return text