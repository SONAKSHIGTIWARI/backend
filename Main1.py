from dotenv import load_dotenv
from pydantic import BaseModel
from langchain_openai import ChatOpenAI
from agents import Agent, Runner

load_dotenv()

llm = ChatOpenAI(model="gpt-4o-mini")

response = llm.invoke("Help me research on Artificial Intelligence in Marketing")
print(response)

class ResearchResponse(BaseModel):
    topic: str
    summary: str
    sources: list[str]
    tools_used: list[str]
    parser = ResearchResponse.model_json_schema()   
print(ResearchResponse.model_json_schema())
agent = Agent(llm=llm, response_model=ResearchResponse)
runner = Runner(agent=agent, verbose=True)
query = input("What can I help you research? ")
raw_response = runner.invoke({"query": query})
try:
    structured_response = ResearchResponse.model_validate(raw_response)
    print(structured_response)
except Exception as e:
    print(f"Error parsing response: {e}")
    print("Raw response:", raw_response)
# Note: The above code assumes that the Agent and Runner classes are defined in the agents module.
# If they are not, you will need to implement them or adjust the import statement accordingly.

# The Agent class should handle the logic of invoking the LLM and processing the response.
# The Runner class should manage the execution of the agent and handle user queries.
# Ensure that the Agent and Runner classes are implemented correctly to work with the LLM and Pydantic model.


