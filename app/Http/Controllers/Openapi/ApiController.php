<?php

namespace App\Http\Controllers\Openapi;
use Illuminate\Support\Facades\Http;

use Illuminate\Http\Request;
use Illuminate\Support\Str;

use App\Http\Controllers\Controller;
use App\Http\Requests\Openapi\ApiRequest;

class ApiController extends Controller
{
    public function search(ApiRequest $request) {
        $prompt = 'The best way to create Google ad headlines is to use the actual search term within your ad copy. It’s also a good idea to combine this search term with a powerful benefit inherent in your product(s). You could also opt for credibility here, to help improve conversions. For example, someone searching for a “craft beer kit” might be enticed by a Headline #1 that reads “World’s best craft beer kit.”\nPlease include the unique value proposition—what makes your product so much better than any of the competitors on the market? What are you offering that no one else is? How are you a uniquely better brand than the other schmucks advertising to the same keywords?\nwrite 10 Google ad headlines for the search query '.$request['search'].':\n';
        $url = 'https://api.openai.com/v1/engines/text-davinci-002/completions';
        $apikey = 'Bearer '.env('API_KEY');
        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
            'Authorization' => $apikey
        ])->post($url, [
            "prompt" => $prompt, 
            "temperature" => 0.7, 
            "max_tokens" => 1802, 
            "top_p" => 1, 
            "best_of" => 1, 
            "frequency_penalty" => 0, 
            "presence_penalty" => 0 
        ]);
        echo $response;
    }
}
