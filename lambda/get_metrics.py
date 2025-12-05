import json

def lambda_handler(event, context):
    # Placeholder for fetching data from Athena or S3
    metrics = {
        "temperature": "+1.1C",
        "co2": "419 ppm",
        "sea_level": "3.4 mm/yr"
    }
    
    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'OPTIONS,GET'
        },
        'body': json.dumps(metrics)
    }
