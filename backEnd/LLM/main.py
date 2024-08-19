import transformers
from transformers import AutoModelForCausalLM, AutoTokenizer
import torch
import os


def save():
    os.makedirs("./model", exist_ok=True)
    if(len(os.listdir("./model")) == 0):
        print("Message: Downloading Model")
        model_name = "EleutherAI/gpt-neo-125M" #ID of Model
        tokenizer = AutoTokenizer.from_pretrained(model_name, clean_up_tokenization_spaces=True) #Automatically load the correct tokenizer for that model
        model = AutoModelForCausalLM.from_pretrained(model_name) #Automatically download the correct model from the name
        
        model.save_pretrained('./model')
        tokenizer.save_pretrained('./model')
    else:
        print("Message: Model Already downloaded")


def getPipeline():
    tokenizer = AutoTokenizer.from_pretrained('./model', clean_up_tokenization_spaces=True)
    model = AutoModelForCausalLM.from_pretrained('./model')
    pipeline = transformers.pipeline("text-generation", model=model, tokenizer=tokenizer, device=0 if torch.cuda.is_available() else -1) #create the pipeline (a HuggingFace wrapper to the already present TF/PyTorch LLM)
    return pipeline


def evaluate(pipeline, prompt):
    result = pipeline(prompt, pad_token_id=pipeline.tokenizer.eos_token_id)[0]['generated_text']
    split = result.split(prompt)
    return split[1]

p = 98957
def getResponse(m):
    global p
    save()
    if(p == 98957):
        p = getPipeline()
    return evaluate(p, m)